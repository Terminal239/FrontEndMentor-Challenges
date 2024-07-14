import classes from "./HeroImage.module.css";

const HeroImage = ({ imageUrl, imageAlt }) => {
    return (
        <div className={classes["hero__image"]}>
            <img src={imageUrl} alt={imageAlt} />
        </div>
    );
};

export default HeroImage;
