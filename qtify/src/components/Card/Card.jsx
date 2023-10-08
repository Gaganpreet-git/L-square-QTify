import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image, followers }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDetails}>
        <img src={image} alt={name} className={styles.cardImage} />
        <span className={styles.cardFollowers}>{`${followers} followers`}</span>
      </div>
      <div className={styles.cardName}>{name}</div>
    </div>
  );
};

export default Card;
