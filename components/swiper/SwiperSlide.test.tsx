import { render, screen } from "@testing-library/react";
import SwiperSlide from "~/components/swiper/SwiperSlide";

describe("SwiperSlide", () => {
  describe("화면", () => {
    it("화면은 정상적으로 렌더링 되는가?", () => {
      render(
        <SwiperSlide size={100}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toBeInTheDocument();
    });

    it("자식 요소는 정상적으로 렌더링 되는가?", () => {
      render(
        <SwiperSlide size={100}>
          <div data-testid="swiper-slide-child"></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide-child")).toBeInTheDocument();
    });
  });

  describe("컴포넌트 크기", () => {
    it("크기가 정수인 경우, 문제 없이 반영되는가?", () => {
      render(
        <SwiperSlide size={100} space={0}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        width: "100px",
      });
    });

    it("크기가 음수인 경우, auto로 설정되는가?", () => {
      render(
        <SwiperSlide size={-100} space={0}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        width: "auto",
      });
    });

    it("크기가 0인 경우, auto로 설정되는가?", () => {
      render(
        <SwiperSlide size={0} space={0}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        width: "auto",
      });
    });
  });

  describe("컴포넌트 여백", () => {
    it("여백이 정수인 경우, 정상적으로 반영되는가?", () => {
      render(
        <SwiperSlide size={100} space={50}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        marginRight: "50px",
      });
    });

    it("여백이 음수인 경우, 정상적으로 반영되는가?", () => {
      render(
        <SwiperSlide size={100} space={-50}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        marginRight: "-50px",
      });
    });

    it("여백이 0인 경우, 정상적으로 반영되는가?", () => {
      render(
        <SwiperSlide size={100} space={0}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        marginRight: "0px",
      });
    });

    it("여백을 누락한 경우, 기본 값으로 반영되는가?", () => {
      render(
        <SwiperSlide size={100}>
          <div></div>
        </SwiperSlide>
      );

      expect(screen.getByTestId("swiper-slide")).toHaveStyle({
        marginRight: "20px",
      });
    });
  });
});
