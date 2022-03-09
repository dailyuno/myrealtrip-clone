import { render, screen } from "@testing-library/react";
import { Offer } from "../types";
import OfferCard from "./OfferCard";

const fakeOffer = {
  title: "[제주투어] 제주 개인택시 택시투어/차량가이드",
  image:
    "https://d2ur7st6jjikze.cloudfront.net/offer_photos/83016/515198_medium_1593049840.jpg?1593049840",
  review: { count: 0, type: "mrt", star: null },
  category: "가이드 투어",
  isGuarantee: false,
  nowUse: false,
  price: {
    main: 66000.0,
    origin: 71000.0,
    includeDiscount: false,
  },
  city: {
    name: "제주도",
  },
} as Offer;

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      return <img src={src} alt={alt} />;
    }
);

describe("<OfferCard>", () => {
  it("정상적으로 렌더링 되는가?", () => {
    render(<OfferCard offer={fakeOffer} />);

    const { title, image, category, city, price } = fakeOffer;
    const { name } = city;
    const { origin } = price;

    /* 이미지 */
    expect(screen.getByAltText(title)).toHaveAttribute("src", image);

    /* 카테고리와 도시 이름 */
    expect(screen.getByTestId("offer-card-label")).toHaveTextContent(
      `${category} ・ ${name}`
    );

    /* 상품 제목 */
    expect(screen.getByTestId("offer-card-title")).toHaveTextContent(title);

    /* 후기 이벤트 */
    expect(screen.getByTestId("offer-card-review-event")).toBeInTheDocument();

    /* 별점 */
    expect(() => screen.getByTestId("offer-card-review")).toThrow();

    /* 기존 가격 */
    expect(screen.getByTestId("offer-card-price-origin")).toHaveTextContent(
      origin.toLocaleString()
    );

    /* 최저가 보장제 */
    expect(() => screen.getByTestId("offer-card-guarantee")).toThrow();

    /* 즉시 확정 */
    expect(() => screen.getByTestId("offer-card-now-use")).toThrow();
  });

  it("최저가 보장제 요소는 렌더링 되는가?", () => {
    const fakeOfferEnableGuarantee = { ...fakeOffer, isGuarantee: true };
    render(<OfferCard offer={fakeOfferEnableGuarantee} />);
    expect(screen.getByTestId("offer-card-guarantee")).toBeInTheDocument();
  });

  it("즉시확정 요소는 렌더링 되는가?", () => {
    const fakeOfferEnableNowUse = { ...fakeOffer, nowUse: true };
    render(<OfferCard offer={fakeOfferEnableNowUse} />);
    expect(screen.getByTestId("offer-card-now-use")).toBeInTheDocument();
  });

  it("별점 요소는 정상적으로 렌더링 되는가?", () => {
    const review = {
      count: 10,
      type: "mrt",
      star: 4.5,
    };
    const fakeOfferEnableReview = {
      ...fakeOffer,
      review,
    };

    render(<OfferCard offer={fakeOfferEnableReview} />);

    /* 리뷰 요소 */
    expect(screen.getByTestId("offer-card-review")).toBeInTheDocument();

    /* 리뷰 개수 */
    expect(screen.getByTestId("offer-card-review-count")).toHaveTextContent(
      String(review.count)
    );
  });

  it("할인 요소는 정상적으로 렌더링 되는가?", () => {
    const fakeOfferEnableDiscount = {
      ...fakeOffer,
      price: {
        ...fakeOffer.price,
        includeDiscount: true,
      },
    };
    render(<OfferCard offer={fakeOfferEnableDiscount} />);
    expect(screen.getByTestId("offer-card-discount")).toHaveTextContent(
      `${fakeOfferEnableDiscount.price.main.toLocaleString()}원`
    );
  });
});
