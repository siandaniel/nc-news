import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((articlesFromApi) => {
          setArticles(articlesFromApi)
        })
      }, [])

    return (
      <section className="articles-section">
        <h2>ALL ARTICLES</h2>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />
        })}
      </section>
    );
}

export default Articles;