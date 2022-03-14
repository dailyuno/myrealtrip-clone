import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import PopularCityVideo from "~/modules/cities/components/PopularCityVideo";
import { City } from "~/modules/cities/types";
import Maybe from "~/components/common/Maybe";
import SwiperControl from "~/components/swiper/SwiperControl";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import Image from "next/image";

interface PopularCityVideoContainerProps {
  cities: City[];
}

const PopularCityVideoContainer: FC<PopularCityVideoContainerProps> = ({
  cities,
}: PopularCityVideoContainerProps) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mt-14 mb-8">
        <h2 className="text-3xl font-bold">어디로 떠나세요?</h2>

        <button className="flex items-center justify-between px-5 py-2 bg-white border border-solid border-gray-300 rounded">
          <Image
            src="https://dffoxz5he03rp.cloudfront.net/icons/ic_all_md_blue_500.svg"
            alt="전체 도시 아이콘"
            width={25}
            height={24}
          />
          <span className="text-sm">전체 도시</span>
        </button>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={4}
        onBeforeInit={(swiper) => setSwiper(swiper)}
      >
        {cities.map((city) => {
          return (
            <SwiperSlide key={city.key}>
              <PopularCityVideo city={city} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Maybe test={!!swiper}>
        <SwiperControl swiper={swiper as SwiperCore} />
      </Maybe>
    </div>
  );
};

export default PopularCityVideoContainer;
