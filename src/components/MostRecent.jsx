import { Link } from "react-router-dom";

function MostRecent({mostRecent, query, topic}) {
    return (
      <article className="most-recent">
        <h2> {query === "?sort_by=created_at&order=desc" ? `Recently posted ${topic ? `in ${topic}` : ""} ...` :
              query ===  "?sort_by=created_at&order=asc" ? `Been around a while ${topic ? `in ${topic}` : ""}!` :
              query === "?sort_by=comment_count&order=desc" ? `People are talking about ${topic ? `in ${topic}` : ""}...` :
              query === "?sort_by=comment_count&order=asc" ? "Want to be one of the first to comment?" :
              query === "?sort_by=votes&order=desc" ? `Our users are loving ${topic ? `in ${topic}` : ""} ❤️` : 
              query === "?sort_by=votes&order=asc" ? "Show some love?" : "" }</h2>
        <Link to={`/articles/article/${mostRecent.article_id}`} className="article-link"><img src={mostRecent.article_img_url} id="most-recent-img" alt={mostRecent.title}/></Link>
        <Link to={`/articles/article/${mostRecent.article_id}`} className="article-link"><h3 className="recent-header">{mostRecent.title}</h3></Link>
        <section className="most-recent-details">
            <p className="recent-topic">{mostRecent.topic}</p>
            <p className="recent-author">{mostRecent.author} </p>
            <p className="recent-votes">Votes: {mostRecent.votes}</p>
        </section>
      </article>
    );
}

export default MostRecent;