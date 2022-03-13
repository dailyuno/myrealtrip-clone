import { render, waitFor } from "@testing-library/react";
import { debug } from "console";
import { mocked } from "jest-mock";
import OfferCardContainer from "~/modules/offers/components/OfferCardContainer";
import { ResponseExperienceOffers } from "~/modules/offers/types/response";
import fetcher from "~/utils/fetcher";
import Home from ".";

jest.mock("~/modules/offers/components/OfferCardContainer", () =>
  jest.fn(() => <div></div>)
);
const mockedOfferCardContainer = mocked(OfferCardContainer);

describe("index 페이지", () => {
  let experienceOffers: ResponseExperienceOffers;

  beforeAll(async () => {
    experienceOffers = await fetcher("/api/offers");
  });

  beforeEach(() => {
    mockedOfferCardContainer.mockClear();
  });

  it("여행 상품들이 나오는가?", () => {
    render(<Home />);

    waitFor(() => {
      expect(mockedOfferCardContainer).toBeCalledTimes(
        experienceOffers.popular_offers.length
      );
    });
  });
});
