import { useState } from "react";
import Button from "../Resuable/Button";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import styles from "./CTA.module.css";
import IconError from "../../assets/icon-error.svg";
import * as EmailValidator from "email-validator";

export const CTA = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onButtonSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // @ts-ignore
    const input = event.target[0].value;
    const result = EmailValidator.validate(input);

    if (result) return;

    setErrorMessage("Whoops, make sure it's an email");
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  return (
    <section className={styles["section-cta"]}>
      <MaxWidthWrapper classes={styles["container"]}>
        <span className={styles["upper-text"]}>35,000+ already joined</span>
        <h2>Stay up-to-date with what we’re doing</h2>
        <form onSubmit={onButtonSubmit} className={styles["form"]}>
          <div className={errorMessage.length > 0 ? styles.error : ""}>
            <input type="text" placeholder="Enter your email address" />
            {errorMessage.length > 0 && <p className={styles["error-message"]}>{errorMessage}</p>}
            {errorMessage.length > 0 && <img className={styles["error-icon"]} src={IconError} />}
          </div>
          <Button inForm={true} spacing={{ block: 16, inline: 24 }} type="secondary">
            Contact us
          </Button>
        </form>
      </MaxWidthWrapper>
    </section>
  );
};
