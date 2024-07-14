const ArticleCard = ({ author, imageURL, headline, content, imageAlt }) => {
    return (
        <article>
            <img src={imageURL} alt={imageAlt} />
            <div>
                <span>By {author}</span>
                <a href="#">
                    <h4>{headline}</h4>
                </a>
                <p>{content}</p>
            </div>
        </article>
    );
};

export default ArticleCard;
