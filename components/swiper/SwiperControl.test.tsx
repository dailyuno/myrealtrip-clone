import { render, screen } from "@testing-library/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import SwiperControl from "./SwiperControl";
import { useState } from "react";
import Maybe from "../common/Maybe";

const swiper = {
  isBeginning: true,
  isEnd: false,
  slidePrev() {
    this.isBeginning = false;
    this.isEnd = true;
  },
  slideNext() {
    this.isEnd = true;
    this.isBeginning = false;
  },
} as SwiperCore;

describe("SwiperControl", () => {
  describe("좌우 버튼", () => {
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
});
