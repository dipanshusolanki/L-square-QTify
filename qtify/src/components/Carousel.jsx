import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

const Carousel = ({ data, hasTabFilter }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  //   console.log(swiper);

  useEffect(() => {
    setIsBeginning(true);
    setIsEnd(false);
  }, []);

  return (
    <>
      <div className="mainCarousel">
        <LeftNavigation
          isHidden={isBeginning}
          onClick={() => swiperInstance && swiperInstance.slidePrev()}
        />
        <RightNavigation
          isHidden={isEnd}
          onClick={() => swiperInstance && swiperInstance.slideNext()}
        />
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          //   navigation
          onSwiper={setSwiperInstance}
          onReachBeginning={() => {
            setIsBeginning(true);
          }}
          onReachEnd={() => {
            setIsEnd(true);
          }}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}
        >
          {hasTabFilter === true ? (
            <>
              {data.map((album) => (
                <SwiperSlide key={album.id}>
                  <Card hasLikes={true} data={album} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {data.map((album) => (
                <SwiperSlide key={album.id}>
                  <Card hasLikes={false} data={album} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
