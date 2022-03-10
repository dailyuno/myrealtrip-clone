import { ReactNode, useEffect, useRef } from "react";

interface SwiperSlideProps {
  size: number;
  space?: number;
  children: ReactNode;
}

const SwiperSlide = ({ children, size, space = 20 }: SwiperSlideProps) => {
  const swiperSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperSlideRef.current) {
      const { style } = swiperSlideRef.current;
      style.width = size > 0 ? `${size}px` : "auto";
      style.marginRight = `${space}px`;
    }
  });

  return (
    <div ref={swiperSlideRef} data-testid="swiper-slide">
      {children}
    </div>
  );
};

export default SwiperSlide;
