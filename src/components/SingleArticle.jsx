import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById, getUserByUsername } from "../utils/api";
import Comments from "./Comments";

function SingleArticle({ isLoading, setIsLoading }) {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [author, setAuthor] = useState({});
    const [votes, setVotes] = useState();

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
            .then((articleFromApi) => {
                setSingleArticle(articleFromApi)
                setVotes(articleFromApi.votes)
                getUserByUsername(articleFromApi.author)
                    .then((author) => {
                        setAuthor(author);
                        setIsLoading(false);
                    })
            })
    }, [article_id, setIsLoading])

    const upVote = (e) => {
        setVotes((currVote) => {
            return currVote + 1;
        })
    }

    const downVote = (e) => {
        setVotes((currVote) => {
            return currVote - 1;
        })
    }

    if (isLoading) {
        return (
            <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading" id="loading-img" />
        )
    }

    return (
        <section>
        <article className="single-article">
            <h2>{singleArticle.title}</h2>
            <div className="single-article-details">
                <img id="author-avatar" src={author.avatar_url} alt={singleArticle.author} />
                <p>{singleArticle.author}</p>
                <p className="topic-label">{singleArticle.topic}</p>
                <p>{singleArticle.created_at}</p>
            </div>
            <img src={singleArticle.article_img_url} alt={singleArticle.title} />
            <p className="article-body">{singleArticle.body}</p>
            <section className="votes">
                <p>❤️ Votes: {votes}</p>
                <button onClick={upVote}>❤️ +1</button>
                <button onClick={downVote}>👎 -1</button>
            </section>
        <br></br>
            <br></br>
        </article>
        <Comments/>
        </section>
    )
}

export default SingleArticle;