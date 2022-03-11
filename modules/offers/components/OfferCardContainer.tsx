import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { OfferContainer } from "../types";
import OfferCard from "./OfferCard";
import SwiperControl from "~/components/swiper/SwiperControl";
import Maybe from "~/components/common/Maybe";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

interface OfferContainerProps {
  container: OfferContainer;
}

const OfferCardContainer: React.FC<OfferContainerProps> = ({
  container,
}: OfferContainerProps) => {
  const { title, offers } = container;
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="relative mb-10">
      <h2
        className="text-2xl mb-4 font-medium"
        data-testid="offer-container-title"
      >
        {title}
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        slidesPerGroup={4}
        onBeforeInit={(swiper) => setSwiper(swiper)}
      >
        {offers.map((offer) => {
          return (
            <SwiperSlide key={offer.id}>
              <OfferCard offer={offer} />
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

export default OfferCardContainer;
