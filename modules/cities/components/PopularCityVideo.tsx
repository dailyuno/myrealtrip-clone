import Image from "next/image";
import { FC, MouseEvent, useRef, useState } from "react";
import Maybe from "~/components/common/Maybe";
import { City } from "../types";

interface PopularCityVideoProps {
  city: City;
}

const PopularCityVideo: FC<PopularCityVideoProps> = ({
  city,
}: PopularCityVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (video && !visible) {
      setVisible(true);
      video.currentTime = 0;
      video.play();
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (video && visible) {
      setVisible(false);
      video.pause();
    }
  };

  return (
    <div
      className="w-full h-80 group relative overflow-hidden rounded-lg shadow-lg shadow-gray-200"
      onMouseOver={playVideo}
      onMouseLeave={pauseVideo}
      data-testid="popularCityVideo"
    >
      <Maybe test={!!city.city_intro}>
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 ease-in duration-300 ${
            visible ? "visible" : "invisible"
          }`}
          data-testid="popularCityVideo-video"
        >
          <video
            src={city.city_intro}
            loop
            autoPlay
            ref={videoRef}
            className="w-full h-auto"
          />
        </div>
      </Maybe>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={city.image}
          alt={city.name}
          layout="fill"
          objectFit="cover"
          className={`${
            !city.city_intro
              ? "ease-out duration-[3000ms] group-hover:scale-110"
              : ""
          }`}
        />
      </div>
      <div className="absolute w-full h-full top-0 bg-gradient-to-br from-gray-700"></div>
      <div className="absolute top-8 left-6 right-6 flex flex-col text-white">
        <div className="mb-2">
          <span
            data-testid="popularCityVideo-name"
            className="text-2xl font-semibold mr-2"
          >
            {city.name}
          </span>
        </div>
        <div
          className="text-lg font-medium"
          data-testid="popularCityVideo-productCount"
        >
          {city.active_product_count.toLocaleString()}여 개의 여행 상품
        </div>
      </div>
      <button
        className="absolute bottom-7 left-6 h-10 px-4 text-sm bg-white rounded text-gray-700"
        data-testid="popularCityVideo-button"
      >
        둘러보기
      </button>
    </div>
  );
};

export default PopularCityVideo;
