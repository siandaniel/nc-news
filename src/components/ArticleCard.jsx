function ArticleCard({article}) {
    return (
        <article className="article-card">
        <section className="article-details">
            <h3>{article.title} </h3>
            <p className="topic-label">{article.topic}</p>
            <p>{article.author} </p>
            <p>Votes: {article.votes}</p>
        </section>
        <img src={article.article_img_url} alt={article.title}/>
        </article>
    );
}

export default ArticleCard;