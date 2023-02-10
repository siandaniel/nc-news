import { Link } from "react-router-dom";

function ArticleCard({article}) {
    return (
        <article className="article-card">
        <section className="article-details">
            <Link to={`/articles/article/${article.article_id}`} className="article-link"><h3>{article.title}</h3></Link>
            <p className="topic-label">{article.topic}</p>
            <p>{article.author} </p>
            <p>Votes: {article.votes}</p>
        </section>
        <Link to={`/articles/article/${article.article_id}`} className="article-link-img"><img src={article.article_img_url} alt={article.title}></img></Link>
        </article>
    );
}

export default ArticleCard;