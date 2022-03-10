import { render, screen } from "@testing-library/react";
import fetcher from "~/utils/fetcher";
import { Offer } from "../types";
import OfferCard from "./OfferCard";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      return <img src={src} alt={alt} />;
    }
);

describe("OfferCard", () => {
  let offer: Offer;

  beforeAll(async () => {
    offer = await fetcher("/api/offer/1");
  });

  describe("화면", () => {
    it("이미지는 정상적으로 렌더링 되는가?", () => {
      render(<OfferCard offer={offer} />);
      expect(screen.getByAltText(offer.title)).toHaveAttribute(
        "src",
        offer.image
      );
    });

    it("카테고리와 도시 이름은 정상적으로 렌더링 되는가?", () => {
      render(<OfferCard offer={offer} />);
      expect(screen.getByTestId("offer-card-label")).toHaveTextContent(
        `${offer.category} ・ ${offer.city.name}`
      );
    });

    it("상품 제목은 정상적으로 렌더링 되는가?", () => {
      render(<OfferCard offer={offer} />);
      expect(screen.getByTestId("offer-card-title")).toHaveTextContent(
        offer.title
      );
    });
  });

  describe("리뷰", () => {
    it("후기 이벤트 요소는 렌더링 되는가?", () => {
      const offerWithoutReview = {
        ...offer,
        review: {
          ...offer.review,
          count: null,
          star: null,
        },
      };

      render(<OfferCard offer={offerWithoutReview} />);
      expect(screen.getByTestId("offer-card-review-event")).toBeInTheDocument();
    });

    it("별점 요소는 렌더링 되는가?", () => {
      const offerWithReview = {
        ...offer,
        review: {
          ...offer.review,
          count: 10,
          star: 4.5,
        },
      };

      render(<OfferCard offer={offerWithReview} />);

      /* 리뷰 요소 */
      expect(screen.getByTestId("offer-card-review")).toBeInTheDocument();

      /* 리뷰 개수 */
      expect(screen.getByTestId("offer-card-review-count")).toHaveTextContent(
        String(10)
      );
    });
  });

  describe("최저가 보장제", () => {
    it("요소는 렌더링 되는가?", () => {
      const offerEnableGuarantee = { ...offer, isGuarantee: true };
      render(<OfferCard offer={offerEnableGuarantee} />);
      expect(screen.getByTestId("offer-card-guarantee")).toBeInTheDocument();
    });

    it("요소는 렌더링 되지 않는가?", () => {
      const offerDisableGuarantee = { ...offer, isGuarantee: false };
      render(<OfferCard offer={offerDisableGuarantee} />);
      expect(() => screen.getByTestId("offer-card-guarantee")).toThrow();
    });
  });

  describe("즉시확정", () => {
    it("요소는 렌더링 되지 않는가?", () => {
      const offerEnableNowUse = { ...offer, nowUse: true };
      render(<OfferCard offer={offerEnableNowUse} />);
      expect(screen.getByTestId("offer-card-now-use")).toBeInTheDocument();
    });

    it("요소는 렌더링 되지 않는가?", () => {
      const offerDisableNowUse = { ...offer, nowUse: false };
      render(<OfferCard offer={offerDisableNowUse} />);
      expect(() => screen.getByTestId("offer-card-now-use")).toThrow();
    });
  });

  describe("가격", () => {
    it("기존 가격으로 렌더링 되는가?", () => {
      const offerDisableDiscount = {
        ...offer,
        price: { ...offer.price, includeDiscount: false },
      };

      render(<OfferCard offer={offerDisableDiscount} />);
      expect(screen.getByTestId("offer-card-price-origin")).toHaveTextContent(
        offer.price.origin.toLocaleString()
      );
    });

    it("할인 가격은 렌더링 되는가?", () => {
      const offerEnableDiscount = {
        ...offer,
        price: { ...offer.price, includeDiscount: true },
      };

      render(<OfferCard offer={offerEnableDiscount} />);
      expect(screen.getByTestId("offer-card-discount")).toHaveTextContent(
        `${offer.price.main.toLocaleString()}원`
      );
    });
  });
});
