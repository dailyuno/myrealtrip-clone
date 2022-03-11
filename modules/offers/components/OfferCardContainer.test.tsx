import { render, screen } from "@testing-library/react";
import { OfferContainer } from "../types";
import OfferCardContainer from "./OfferCardContainer";
import { mocked } from "jest-mock";
import OfferCard from "./OfferCard";
import fetcher from "~/utils/fetcher";

jest.mock("swiper/react", () => {
  return {
    __esModule: true,
    Swiper: jest.fn(({ children }) => <div>{children}</div>),
    SwiperSlide: jest.fn(({ children }) => <div>{children}</div>),
  };
});

jest.mock("./OfferCard", () => jest.fn(() => <div></div>));
const mockedOfferCard = mocked(OfferCard);

describe("OfferContainer", () => {
  let offerContainer: OfferContainer;

  beforeAll(async () => {
    offerContainer = await fetcher("/api/offer-container");
  });

  beforeEach(() => {
    mockedOfferCard.mockClear();
  });

  describe("화면", () => {
    it("제목은 정상적으로 나오는가?", () => {
      render(<OfferCardContainer container={offerContainer} />);
      expect(screen.getByTestId("offer-container-title")).toHaveTextContent(
        offerContainer.title
      );
    });
  });

  describe("offerCard 컴포넌트", () => {
    it("여러 개 렌더링 되는가?", () => {
      render(<OfferCardContainer container={offerContainer} />);
      expect(mockedOfferCard).toBeCalledTimes(offerContainer.offers.length);
    });

    it("렌더링 되지 않는가?", () => {
      const offerContainerWithoutOffers = {
        ...offerContainer,
        offers: [],
      };
      render(<OfferCardContainer container={offerContainerWithoutOffers} />);
      expect(mockedOfferCard).toBeCalledTimes(0);
    });
  });
});
