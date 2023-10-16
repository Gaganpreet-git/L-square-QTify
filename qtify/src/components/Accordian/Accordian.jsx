import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = ({ title, description }) => {
  return (
    <div>
      <Accordion
        style={{
          borderRadius: "10px",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "500",
          marginBottom: "18px",
        }}
      >
        <AccordionSummary
          style={{
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            borderRadius: "10px",
          }}
          expandIcon={
            <ExpandMoreIcon style={{ color: "#34C94B", fontSize: "40px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            fontSize: "18px",
          }}
        >
          <Typography>{description} </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
