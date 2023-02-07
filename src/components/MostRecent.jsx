function MostRecent({mostRecent}) {
    return (
      <article className="most-recent">
        <h2>Recently Posted...</h2>
        <img src={mostRecent.article_img_url} id="most-recent-img" alt={mostRecent.title}/>
            <h3 className="recent-header">{mostRecent.title}
            </h3>
        <section className="most-recent-details">
            <p className="recent-topic">{mostRecent.topic}</p>
            <p className="recent-author">{mostRecent.author} </p>
            <p className="recent-votes">Votes: {mostRecent.votes}</p>
        </section>
      </article>
    );
}

export default MostRecent;