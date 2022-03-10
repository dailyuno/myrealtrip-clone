import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface SwiperProps {
  children: ReactNode[];
  size: number;
  space: number;
  itemCount: number;
  showCount: number;
}

const Swiper: React.FC<SwiperProps> = ({
  children,
  size,
  space,
  itemCount,
  showCount,
}: SwiperProps) => {
  const [page, setPage] = useState<number>(0);
  const transformX = (size + space) * page;

  const swiperElRef = useRef<HTMLDivElement>(null);
  const swiperWidth = (size + space) * itemCount;

  useEffect(() => {
    if (swiperElRef.current) {
      const { style } = swiperElRef.current;
      style.width = `${swiperWidth}px`;
      style.transform = `translateX(-${transformX}px)`;
    }
  }, [swiperWidth, transformX]);

  return (
    <div
      className="flex transition-all duration-300"
      ref={swiperElRef}
      data-testid="swiper"
    >
      {children}
    </div>
  );
};

export default Swiper;
