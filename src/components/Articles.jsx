import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import MostRecent from "./MostRecent";

function Articles({isLoading, setIsLoading}) {
    const [articles, setArticles] = useState([]);
    const [mostRecent, setMostRecent] = useState({});

    useEffect(() => {
        setIsLoading(true);
        getArticles().then((articlesFromApi) => {
          setArticles(articlesFromApi);
          setMostRecent(articlesFromApi[0]);
          setIsLoading(false);
        })
      }, [setIsLoading])

    if (isLoading) {
        return (
            <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading" id="loading-img"/>
        )
    }

    else {

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
}

export default Articles;