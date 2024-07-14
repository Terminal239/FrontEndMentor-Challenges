import { useState } from "react";
import Button from "../Resuable/Button";
import styles from "./ShortLinks.module.css";

interface Props {
  original: string;
  shortened: string;
}

const Link = ({ original, shortened }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onClickCopy = () => {
    navigator.clipboard.writeText(shortened);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <article className={styles["link-item"]}>
      <div className={styles.links}>
        <a className={styles.original} href={original}>
          {original}
        </a>
        <a className={styles.shortened} href={shortened}>
          {shortened}
        </a>
      </div>
      <Button onButtonClick={onClickCopy} spacing={{ inline: 16 }} borderRadius={8} type={isCopied ? "secondary" : "primary"}>
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </article>
  );
};

export default Link;
