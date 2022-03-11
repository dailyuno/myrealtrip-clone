import Image from "next/image";
import { FC, useState } from "react";
import SwiperRef from "swiper";
import Maybe from "../common/Maybe";

interface SwiperControlProps {
  swiper: SwiperRef;
}

const SwiperControl: FC<SwiperControlProps> = ({
  swiper,
}: SwiperControlProps) => {
  const [navigation, setNavigation] = useState({
    hasPrevious: !swiper.isBeginning,
    hasNext: !swiper.isEnd,
  });

  const updateNavigation = () => {
    const { isBeginning, isEnd } = swiper;

    setNavigation({
      hasPrevious: !isBeginning,
      hasNext: !isEnd,
    });
  };

  const prevSlide = () => {
    swiper.slidePrev();
    updateNavigation();
  };

  const nextSlide = () => {
    swiper.slideNext();
    updateNavigation();
  };

  return (
    <>
      <Maybe test={navigation.hasPrevious}>
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shadow-gray-400 absolute top-2/4 -left-5 z-10"
          data-testid="swiper-navigation-left"
        >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo="
            alt="좌측 버튼"
            width={24}
            height={24}
          />
        </button>
      </Maybe>
      <Maybe test={navigation.hasNext}>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow shadow-gray-400 absolute top-2/4 -right-5 z-10"
          data-testid="swiper-navigation-right"
        >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg=="
            alt="우측 버튼"
            width={24}
            height={24}
          />
        </button>
      </Maybe>
    </>
  );
};

export default SwiperControl;
