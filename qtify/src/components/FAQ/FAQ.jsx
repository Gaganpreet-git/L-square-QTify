import React from "react";
import Accordian from "../Accordian/Accordian";
import styles from "./FAQ.module.css";
const FAQ = () => {
  const accordiansData = [
    {
      title: "Is QTify free to use?",
      description: "Yes! It is 100% free, and has 0% ads!",
    },
    {
      title: "Can I download and listen to songs offline?",
      description:
        "Sorry, unfortunately we don't provide the service to download any songs.",
    },
  ];

  return (
    <div className={styles.faq}>
      <h1 className={styles.faqHeading}>FAQs</h1>
      <div>
        {accordiansData.map(({ title, description }) => {
          return (
            <Accordian key={title} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
