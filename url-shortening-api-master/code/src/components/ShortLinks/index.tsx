import { useEffect, useState } from "react";
import Button from "../Resuable/Button";
import styles from "./ShortLinks.module.css";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import { LinkItem, getLinks, shortenLink, store } from "../../reducers/link-store";
import Link from "./Link";

export const ShortLinks = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [shortenedLinks, setShortenedLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    const data = getLinks();
    setShortenedLinks(data);
  }, []);

  const onClickShorten = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // @ts-ignore
    const link = event.target[0].value;

    if (link.length == 0) {
      setErrorMessage("Please add a link");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    const result = await shortenLink(link);
    setShortenedLinks((prev) => {
      const newArray = prev.concat(result);
      store(newArray);
      return newArray;
    });
  };

  return (
    <section className={styles["section-links"]}>
      <MaxWidthWrapper classes={styles["outer-container"]}>
        <form onSubmit={onClickShorten} className={styles.container}>
          <input className={errorMessage.length > 0 ? styles["error-input"] : ""} placeholder="Shorten a link here..." type="text" />
          <Button inForm={true} type="primary" borderRadius={8}>
            Shorten it!
          </Button>
          {errorMessage.length > 0 && <p className={styles["error-message"]}>{errorMessage}</p>}
        </form>
        <div className={styles["shortened-links"]}>
          {shortenedLinks.map((object, index) => (
            <Link key={object.shortened + index} {...object} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
