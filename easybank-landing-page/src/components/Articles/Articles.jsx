import { articles } from "../../assets/data.json";
import styles from "./Article.module.css";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section className={styles.articles}>
      <h2>Latest articles</h2>
      <div>
        {articles.map(({ author, image, headline, content }, index) => (
          <ArticleCard
            key={index}
            author={author}
            imageURL={image}
            headline={headline}
            content={content}
            imageAlt={"A"}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
