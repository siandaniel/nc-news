import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById, getUserByUsername } from "../utils/api";

function SingleArticle() {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [author, setAuthor] = useState({});

    useEffect(() => {
        getArticleById(article_id)
            .then((articleFromApi) => {
                setSingleArticle(articleFromApi)
                getUserByUsername(articleFromApi.author)
                    .then((author) => {
                        setAuthor(author)
                    })
            })
    }, [article_id])

    return (
        <section className="single-article">
            <h2>{singleArticle.title}</h2>
            <div className="single-article-details">
                <img id="author-avatar" src={author.avatar_url} alt={author.username} />
                <p>{singleArticle.author}</p>
                <p className="topic-label">{singleArticle.topic}</p>
                <p>{singleArticle.created_at}</p>
            </div>
            <img src={singleArticle.article_img_url} alt={singleArticle.title} />
            <p className="article-body">{singleArticle.body}</p>
            <br></br>
        </section>
    )
}

export default SingleArticle;