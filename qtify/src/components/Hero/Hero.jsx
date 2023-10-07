import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as HeroImage } from "../../assets/vibrating-headphone.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </div>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
