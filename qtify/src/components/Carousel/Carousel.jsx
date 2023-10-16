import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Card from "../Card/Card";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, type }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        style={{ padding: "0 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card
                type={type}
                image={item.image}
                followers={item.follows || item.likes}
                name={item.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
