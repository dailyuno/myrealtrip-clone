import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mocked } from "jest-mock";
import React from "react";
import PopularCityVideo from "./PopularCityVideo";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      return <img src={src} alt={alt} />;
    }
);

const city = {
  type: "city",
  key: "Jeju",
  name: "제주도",
  image:
    "https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304",
  begin: null,
  city_intro: "https://d2ur7st6jjikze.cloudfront.net/intros/50/Jeju_intro.mp4",
  active_product_count: 3150,
};

describe("PopularCityVideo", () => {
  describe("화면", () => {
    beforeEach(() => {
      render(<PopularCityVideo city={city} />);
    });

    it("이미지는 정상적으로 렌더링 되는가?", () => {
      expect(screen.getByAltText(city.name)).toHaveAttribute("src", city.image);
    });

    it("도시의 이름은 정상적으로 렌더링 되는가?", () => {
      expect(screen.getByTestId("popularCityVideo-name")).toHaveTextContent(
        city.name
      );
    });

    it("상품의 개수는 정상적으로 렌더링 되는가?", () => {
      expect(
        screen.getByTestId("popularCityVideo-productCount")
      ).toHaveTextContent(
        `${city.active_product_count.toLocaleString()}여 개의 여행 상품`
      );
    });

    it("둘러보기 버튼은 렌더링 되는가?", () => {
      expect(screen.getByTestId("popularCityVideo-button")).toHaveTextContent(
        "둘러보기"
      );
    });
  });

  describe("영상", () => {
    it("영상은 없을 때, 렌더링 되지 않는다.", () => {
      const cityWithoutVideo = {
        ...city,
        city_intro: "",
      };

      render(<PopularCityVideo city={cityWithoutVideo} />);
      expect(() => screen.getByTestId("popularCityVideo-video")).toThrow();
    });

    it("영상은 정상적으로 렌더링 된다.", () => {
      render(<PopularCityVideo city={city} />);
      expect(screen.getByTestId("popularCityVideo-video")).toBeInTheDocument();
    });
  });

  describe("영상 이벤트", () => {
    const videoPlayMock = jest
      .spyOn(window.HTMLMediaElement.prototype, "play")
      .mockImplementation(async () => {});
    const videoPauseMock = jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});

    beforeEach(() => {
      render(<PopularCityVideo city={city} />);
    });

    it("마우스를 올렸을 때, 비디오는 보여지는가?", async () => {
      userEvent.hover(screen.getByTestId("popularCityVideo"));
      expect(screen.getByTestId("popularCityVideo-video")).toHaveClass(
        "visible"
      );
    });

    it("마우스를 올렸을 때, 비디오는 실행되는가?", () => {
      userEvent.hover(screen.getByTestId("popularCityVideo"));
      expect(videoPlayMock).toBeCalled();
    });

    it("마우스가 벗어났을 때, 비디오는 보이지 않는가?", () => {
      userEvent.hover(screen.getByTestId("popularCityVideo"));
      userEvent.unhover(screen.getByTestId("popularCityVideo"));
      expect(screen.getByTestId("popularCityVideo-video")).toHaveClass(
        "invisible"
      );
    });

    it("마우스가 벗어났을 때, 비디오는 중지되는가?", () => {
      userEvent.hover(screen.getByTestId("popularCityVideo"));
      userEvent.unhover(screen.getByTestId("popularCityVideo"));
      expect(videoPauseMock).toBeCalled();
    });
  });
});
