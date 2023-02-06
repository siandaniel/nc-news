function MostRecent({articles}) {
    return (
      <article className="most-recent">
        <h2>Recently Posted...</h2>
        <img src={articles[0].article_img_url} id="most-recent-img" alt={articles[0].title}/>
            <h3 className="recent-header">{articles[0].title}
            </h3>
        <section className="most-recent-details">
            <p className="recent-topic">{articles[0].topic}</p>
            <p className="recent-author">{articles[0].author} </p>
            <p className="recent-votes">Votes: {articles[0].votes}</p>
        </section>
      </article>
    );
}

export default MostRecent;