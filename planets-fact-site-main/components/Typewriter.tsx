"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useState, useEffect } from "react";

interface Props {
  inputText: string;
  element: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  speed?: number;
  classes?: string;
}

const Typewriter = ({ classes, speed, element, inputText }: Props) => {
  const { width } = useWindowSize();
  const [displayText, setDisplayText] = useState("");
  const [text, setText] = useState(inputText);
  const [touched, setTouched] = useState(false);
  const [index, setIndex] = useState(0);

  if (inputText !== text) {
    setText(inputText);
    setIndex(0);
    setDisplayText("");
  }

  useEffect(() => {
    if (width! < 650) return () => setDisplayText(text);
    else if (!touched && width! >= 650) {
      setDisplayText("");
      setIndex(0);
      setTouched(true);
    }

    if (index < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed || 100);

      return () => clearInterval(intervalId);
    }
  }, [width, index, text, speed]);

  switch (element) {
    case "h1":
      return <h1 className={classes}>{displayText}</h1>;
    case "h2":
      return <h2 className={classes}>{displayText}</h2>;
    case "h3":
      return <h3 className={classes}>{displayText}</h3>;
    case "h4":
      return <h4 className={classes}>{displayText}</h4>;
    case "span":
      return <span className={classes}>{displayText}</span>;
    case "p":
      return <p className={classes}>{displayText}</p>;
  }
};

export default Typewriter;
