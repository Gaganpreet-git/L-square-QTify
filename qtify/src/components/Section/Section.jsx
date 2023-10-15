import React, { useState } from "react";
import styles from "./Section.module.css";
import Grid from "../Grid/Grid";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      <div>
        {carouselToggle ? <Carousel data={data} /> : <Grid data={data} />}
      </div>
    </div>
  );
};

export default Section;
