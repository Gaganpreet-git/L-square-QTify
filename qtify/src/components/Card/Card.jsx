import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";

const Card = ({ name, image, followers, type, songsLength }) => {
  return (
    <Tooltip
      title={songsLength > 0 ? songsLength + " songs" : ""}
      placement="top"
    >
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
    </Tooltip>
  );
};

export default Card;
