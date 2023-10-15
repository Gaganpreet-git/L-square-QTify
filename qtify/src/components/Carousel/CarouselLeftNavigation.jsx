import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/previous-icon.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
