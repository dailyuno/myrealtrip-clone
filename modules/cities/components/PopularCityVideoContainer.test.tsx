import { render, screen } from "@testing-library/react";
import PopularCityVideoContainer from "~/modules/cities/components/PopularCityVideoContainer";
import { ResponsePopularCities } from "~/modules/cities/types/response";
import { mocked } from "jest-mock";
import fetcher from "~/utils/fetcher";
import PopularCityVideo from "~/modules/cities/components/PopularCityVideo";
import { Swiper, SwiperSlide } from "swiper/react";

jest.mock("swiper/react", () => {
  return {
    __esModule: true,
    Swiper: jest.fn(({ children }) => <div>{children}</div>),
    SwiperSlide: jest.fn(({ children }) => <div>{children}</div>),
  };
});

const mockedSwiper = mocked(Swiper);
const mockedSwiperSlide = mocked(SwiperSlide);

jest.mock("./PopularCityVideo", () => jest.fn(() => <div></div>));
const mockedPopularCityVideo = mocked(PopularCityVideo);

describe("PopularCityVideoContainer", () => {
  let cities: ResponsePopularCities;

  beforeAll(async () => {
    cities = await fetcher("/api/cities/popular");
  });

  beforeEach(() => {
    render(<PopularCityVideoContainer cities={cities.popularCities} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("화면", () => {
    it("타이틀은 렌더링 되는가?", () => {
      expect(screen.getByText("어디로 떠나세요?")).toBeVisible();
    });

    it("전체 도시 버튼은 렌더링 되는가??", () => {
      expect(screen.getByText("전체 도시")).toBeVisible();
    });

    it("swiper 컴포넌트는 렌더링 되는가?", () => {
      expect(mockedSwiper).toBeCalled();
      expect(mockedSwiperSlide).toBeCalledTimes(cities.popularCities.length);
    });

    it("인기 도시 영상은 렌더링 되는가?", () => {
      expect(mockedPopularCityVideo).toHaveBeenCalledTimes(
        cities.popularCities.length
      );
    });
  });
});
