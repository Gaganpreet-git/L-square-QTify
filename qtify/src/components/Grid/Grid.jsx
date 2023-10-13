import React from "react";
import styles from "./Grid.module.css";
import Card from "../Card/Card";
const Grid = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => {
        return (
          <Card image={item.image} name={item.title} followers={item.follows} />
        );
      })}
    </div>
  );
};

export default Grid;
