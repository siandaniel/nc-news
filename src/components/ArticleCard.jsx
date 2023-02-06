function ArticleCard({article}) {
    return (
        <article className="article-card">
        <img src={article.article_img_url} alt={article.title}/>
        <h3>{article.title} </h3>
        <p>{article.author} </p>
        <p>Date: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
      </article>
    );
}

export default ArticleCard;