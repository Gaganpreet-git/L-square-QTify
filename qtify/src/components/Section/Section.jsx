import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Grid from "../Grid/Grid";
import Carousel from "../Carousel/Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Section = ({ title, data, filter, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState("All");

  const filterByGenre = (genre) => {
    if (genre === "All") {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter((item) => {
      return item.genre.label.toLowerCase() === genre.toLowerCase();
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterByGenre(value);
  }, [value]);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "songs" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>
      <div>
        {carouselToggle ? (
          filter ? (
            <div>
              <Tabs
                sx={{ marginBottom: "36px" }}
                value={value}
                onChange={handleChange}
                textColor="#fff"
                indicatorColor="primary"
                aria-label="secondary tabs example"
              >
                {filter.map((item) => {
                  return <Tab value={item} label={item} />;
                })}
              </Tabs>
              <Carousel
                data={filteredData.length > 0 ? filteredData : data}
                type={type}
              />
            </div>
          ) : (
            <Carousel data={data} type={type} />
          )
        ) : (
          <Grid data={data} />
        )}
      </div>
    </div>
  );
};

export default Section;
