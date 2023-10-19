import React from "react";
import styles from "./Grid.module.css";
import Card from "../Card/Card";
const Grid = ({ data, type }) => {
  console.log(data[0].songs.length);
  return (
    <div className={styles.grid}>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.image}
            name={item.title}
            followers={item.follows}
            type
            songsLength={item.songs.length}
          />
        );
      })}
    </div>
  );
};

export default Grid;
