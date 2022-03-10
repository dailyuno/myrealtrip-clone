import { render, screen } from "@testing-library/react";
import Swiper from "~/components/swiper/Swiper";

describe("Swiper", () => {
  describe("화면", () => {
    it("정상적으로 렌더링 되는가?", () => {
      render(
        <Swiper size={100} space={50} itemCount={8} showCount={4}>
          <div></div>
          <div></div>
        </Swiper>
      );

      expect(screen.getByTestId("swiper")).toBeInTheDocument();
    });

    it("자식 요소는 정상적으로 렌더링 되는가?", () => {
      render(
        <Swiper size={100} space={50} itemCount={8} showCount={4}>
          <div data-testid="swiper-child"></div>
          <div data-testid="swiper-child"></div>
        </Swiper>
      );

      expect(screen.getAllByTestId("swiper-child")).toHaveLength(2);
    });
  });

  describe("컴포넌트 크기", () => {
    it("정상적으로 크기가 설정되는가?", () => {
      render(
        <Swiper size={100} space={50} itemCount={8} showCount={4}>
          <div data-testid="swiper-child"></div>
          <div data-testid="swiper-child"></div>
        </Swiper>
      );

      expect(screen.getByTestId("swiper")).toHaveStyle({
        width: "1200px",
      });
    });
  });

  describe("컴포넌트 위치", () => {
    it("초기 값은 정상적으로 설정되는가?", () => {
      render(
        <Swiper size={100} space={50} itemCount={8} showCount={4}>
          <div data-testid="swiper-child"></div>
          <div data-testid="swiper-child"></div>
        </Swiper>
      );

      expect(screen.getByTestId("swiper")).toHaveStyle({
        transform: "translateX(-0px)",
      });
    });
  });
});
