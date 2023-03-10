import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import MostRecent from "./MostRecent";
import ErrorPage from "./ErrorPage";

function Articles({ isLoading, setIsLoading, error, setError }) {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [mostRecent, setMostRecent] = useState({});
  const [query, setQuery] = useState("?sort_by=created_at&order=desc");

  useEffect(() => {
    setError(null)
    setIsLoading(true);
    getArticles(topic, query).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setMostRecent(articlesFromApi[0]);
      setIsLoading(false);
    }).catch((err) => {
      if (err.code === "ERR_BAD_REQUEST")
        setIsLoading(false)
      setError("Sorry, this topic does not exist")
    })
  }, [setIsLoading, setError, topic, query])

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  if (isLoading) {
    return (
      <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading" id="loading-img" />
    )
  }

  if (error) {
    return <ErrorPage error={error} />
  }

  else {

    return (
      <section className="articles-section">
        <form id="sort-by-form">
          <label htmlFor="sort-by">Sort by: </label>
          <select onChange={handleQuery} id="sort-by" value={query}>
            <option value="?sort_by=created_at&order=desc">Date: Newest first</option>
            <option value="?sort_by=created_at&order=asc">Date: Oldest first</option>
            <option value="?sort_by=comment_count&order=desc">Comment Count: Most first</option>
            <option value="?sort_by=comment_count&order=asc">Comment Count: Least first</option>
            <option value="?sort_by=votes&order=desc">Votes: Most first</option>
            <option value="?sort_by=votes&order=asc">Votes: Least first</option>
          </select>
        </form>
        <MostRecent mostRecent={mostRecent} query={query} topic={topic} />
        <section className="articles-container">
          {articles.map((article, index) => {
            return index === 0 ? "" : <ArticleCard article={article} key={article.article_id} />
          })}
        </section>
      </section>
    );

  }
}

export default Articles;