"use client";
import Image from "next/image";
import React, { useState } from "react";
import { QA } from ".";

const Element = ({ question, answer }: QA) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className={`accordion-element ${isVisible && "open"}`}>
      <div className="question" onClick={() => setIsVisible((prev) => !prev)}>
        <h4>{question}</h4>
        <Image src={"/icons/chevron.svg"} alt="chevron" width={24} height={14} />
      </div>
      {isVisible && <p>{answer}</p>}
    </div>
  );
};

export default Element;
