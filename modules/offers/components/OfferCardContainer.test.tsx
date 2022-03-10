import { render, screen } from "@testing-library/react";
import { Offer, OfferContainer } from "../types";
import OfferCardContainer from "./OfferCardContainer";
import { mocked } from "jest-mock";
import OfferCard from "./OfferCard";

const fakeOfferContainer = {
  title: "실시간 베스트 상품",
  offers: [],
  section: {
    name: "MAIN_TOPN",
    page_name: "main",
    pos: 0,
    title: "실시간 베스트 상품",
    more_link: null,
  },
} as OfferContainer;

jest.mock("./OfferCard", () => jest.fn(() => <div></div>));
const mockedOfferCard = mocked(OfferCard);

describe("OfferContainer", () => {
  beforeEach(() => {
    mockedOfferCard.mockClear();
  });

  it("렌더링은 정상적으로 되는가?", () => {
    const { title } = fakeOfferContainer;

    render(<OfferCardContainer container={fakeOfferContainer} />);
    expect(screen.getByTestId("offer-container-title")).toHaveTextContent(
      title
    );
    expect(mockedOfferCard).toBeCalledTimes(0);
  });

  it("offerCard 컴포넌트는 정상적으로 렌더링 되는가?", () => {
    const offers = [{ id: 1 }, { id: 2 }] as Offer[];
    const fakeOfferContainerWithOffers = {
      ...fakeOfferContainer,
      offers,
    };

    render(<OfferCardContainer container={fakeOfferContainerWithOffers} />);
    expect(mockedOfferCard).toBeCalledTimes(offers.length);
  });
});
