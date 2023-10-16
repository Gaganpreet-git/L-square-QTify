import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image, followers, type }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDetails}>
        <img src={image} alt={name} className={styles.cardImage} />
        <span className={styles.cardFollowers}>
          {followers + " "}
          {type === "songs" ? "Likes" : "follows"}
        </span>
      </div>
      <div className={styles.cardName}>{name}</div>
    </div>
  );
};

export default Card;
