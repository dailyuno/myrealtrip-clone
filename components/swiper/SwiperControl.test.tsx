import { fireEvent, render, screen } from "@testing-library/react";
import SwiperCore from "swiper";
import SwiperControl from "./SwiperControl";

const swiper = {
  isBeginning: true,
  isEnd: false,
  slidePrev() {},
  slideNext() {},
} as SwiperCore;

describe("SwiperControl", () => {
  describe("버튼 렌더링", () => {
    it("좌측 버튼은 렌더링 되지 않는가?", () => {
      const swiperDisableLeftButton = {
        ...swiper,
        isBeginning: true,
      };

      render(<SwiperControl swiper={swiperDisableLeftButton} />);
      expect(() => screen.getByTestId("swiper-navigation-left")).toThrow();
    });

    it("좌측 버튼은 렌더링 되는가?", () => {
      const swiperEnableLeftButton = {
        ...swiper,
        isBeginning: false,
      };

      render(<SwiperControl swiper={swiperEnableLeftButton} />);
      expect(screen.getByTestId("swiper-navigation-left")).toBeInTheDocument();
    });

    it("우측 버튼은 렌더링 되지 않는가?", () => {
      const swiperDisableRightButton = {
        ...swiper,
        isEnd: true,
      };

      render(<SwiperControl swiper={swiperDisableRightButton} />);
      expect(() => screen.getByTestId("swiper-navigation-right")).toThrow();
    });

    it("우측 버튼은 렌더링 되는가?", () => {
      const swiperEnableRightButton = {
        ...swiper,
        isEnd: false,
      };

      render(<SwiperControl swiper={swiperEnableRightButton} />);
      expect(screen.getByTestId("swiper-navigation-right")).toBeInTheDocument();
    });
  });

  describe("버튼 렌더링", () => {
    const slidePrev = jest.spyOn(swiper, "slidePrev");
    const slideNext = jest.spyOn(swiper, "slideNext");

    it("좌측 버튼 클릭", () => {
      const swiperEnableLeftButton = {
        ...swiper,
        isBeginning: false,
      };

      render(<SwiperControl swiper={swiperEnableLeftButton} />);
      fireEvent.click(screen.getByTestId("swiper-navigation-left"));
      expect(slidePrev).toHaveBeenCalledTimes(1);
    });

    it("우측 버튼 클릭", () => {
      const swiperEnableRightButton = {
        ...swiper,
        isEnd: false,
      };

      render(<SwiperControl swiper={swiperEnableRightButton} />);
      fireEvent.click(screen.getByTestId("swiper-navigation-right"));
      expect(slideNext).toHaveBeenCalledTimes(1);
    });
  });
});
