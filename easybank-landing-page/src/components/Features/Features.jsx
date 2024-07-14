import styles from "./Features.module.css";

const Features = ({ children }) => {
    return <section className={styles.features}>{children}</section>;
};

export default Features;
