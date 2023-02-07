import { Link } from "react-router-dom";

function MostRecent({mostRecent}) {
    return (
      <article className="most-recent">
        <h2>Recently Posted...</h2>
        <Link to={`/${mostRecent.article_id}`} className="article-link"><img src={mostRecent.article_img_url} id="most-recent-img" alt={mostRecent.title}/></Link>
        <Link to={`/${mostRecent.article_id}`} className="article-link"><h3 className="recent-header">{mostRecent.title}</h3></Link>
        <section className="most-recent-details">
            <p className="recent-topic">{mostRecent.topic}</p>
            <p className="recent-author">{mostRecent.author} </p>
            <p className="recent-votes">Votes: {mostRecent.votes}</p>
        </section>
      </article>
    );
}

export default MostRecent;