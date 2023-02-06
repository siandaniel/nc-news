import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import MostRecent from "./MostRecent";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [mostRecent, setMostRecent] = useState({});

    useEffect(() => {
        getArticles().then((articlesFromApi) => {
          setArticles(articlesFromApi)
          setMostRecent(articlesFromApi[0])
        })
      }, [])

    return (
      <section className="articles-section">
        <MostRecent mostRecent={mostRecent}/>
        <section className="articles-container">
        {articles.map((article, index) => {
            return index === 0 ? "" : <ArticleCard article={article} key={article.article_id}/>
        })}
        </section>
      </section>
    );
}

export default Articles;