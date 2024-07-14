import { useState } from "react";
import styles from "./FAQ.module.css";

interface Props {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: Props) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className={styles["accordion-element"]}>
      <div onClick={() => setExpand((prev) => !prev)} className={styles["accordion-question"]}>
        <p>{question}</p>
        <svg className={styles[`icon-down-${expand ? "invert" : "normal"}`]} xmlns="http://www.w3.org/2000/svg" width="18" height="12">
          <path fill="none" stroke-width="3" d="M1 1l8 8 8-8" />
        </svg>
      </div>
      {expand && <p className={styles["accordion-answer"]}>{answer}</p>}
    </div>
  );
};

export default Accordion;
