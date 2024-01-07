import React from "react";
import Element from "./Element";

export interface QA {
  question: string;
  answer: string;
}

interface Props {
  title: string;
  data: QA[];
}

const Accordion = ({ title, data }: Props) => {
  return (
    <div className="accordion-block">
      <h3>{title}</h3>
      <div className="accordion-container">
        {data.map((element, index) => (
          <Element key={index} {...element} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
