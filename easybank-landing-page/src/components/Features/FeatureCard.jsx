const FeatureCard = ({ imageURL, imageAlt, title, description }) => {
    return (
        <article>
            <img src={imageURL} alt={imageAlt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
};

export default FeatureCard;
