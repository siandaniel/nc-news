import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById, getUserByUsername, updateVotes } from "../utils/api";
import Comments from "./Comments";

function SingleArticle({ isLoading, setIsLoading, userVotes, setUserVotes }) {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [articleAuthor, setArticleAuthor] = useState({});
    const [votes, setVotes] = useState();
    const [voteError, setVoteError] = useState("");
    const [selectedButton, setSelectedButton] = useState("");

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
            .then((articleFromApi) => {
                setSingleArticle(articleFromApi)
                setVotes(articleFromApi.votes)
                getUserByUsername(articleFromApi.author)
                    .then((author) => {
                        setArticleAuthor(author);
                        setIsLoading(false);
                    })
            })
    }, [article_id, setIsLoading])

    const updateVoteNum = (e) => {
        const newVotes = +e.target.value;
        setSelectedButton(e.target.value);
        setVoteError("");
        setVotes((currVote) => {
            return currVote + newVotes;
        })
        updateVotes(article_id, newVotes).catch((err) => {
            setVotes((currVote) => {
                return currVote - newVotes;
            })
            setVoteError("Oops - something went wrong!");
            setSelectedButton("");
        })
        setUserVotes((currUserVotes) => {
            return {
                ...currUserVotes,
                [article_id]: e.target.value
            }
        })
    }

    const undoVote = (e) => {
        const newVotes = +e.target.value;
        const inverseNum = newVotes * -1;
        setVoteError("");
        setSelectedButton("");
        setVotes((currVote) => {
            return currVote + inverseNum;
        })
        updateVotes(article_id, inverseNum).catch((err) => {
            setVotes((currVote) => {
                return currVote - inverseNum;
            })
            setVoteError("Oops - something went wrong!")
            setSelectedButton(e.target.value);
        })
        setUserVotes((currUserVotes) => {
            return {
                ...currUserVotes,
                [article_id]: ""
            }
        })
    }

    if (isLoading) {
        return (
            <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading" id="loading-img" />
        )
    }

    const { title, article_img_url, author, topic, created_at, body } = singleArticle;

    return (
        <section>
            <article className="single-article">
                <h2>{title}</h2>
                <div className="single-article-details">
                    <img id="author-avatar" src={articleAuthor.avatar_url} alt={author} />
                    <p>{author}</p>
                    <p className="topic-label">{topic}</p>
                    <p>{created_at}</p>
                </div>
                <img src={article_img_url} alt={title} />
                <p className="article-body">{body}</p>
                <section className="votes">
                    <p>❤️ Votes: {votes}</p>
                    <button 
                        onClick={userVotes[article_id] === "1" ? undoVote : updateVoteNum} 
                        disabled={userVotes[article_id] === "-1"} 
                        value="1" 
                        className={selectedButton === "1" ? "selected-vote-button" : ""} >❤️ +1</button>
                    <button 
                        onClick={userVotes[article_id] === "-1" ? undoVote : updateVoteNum} 
                        disabled={userVotes[article_id] === "1"} 
                        value="-1" 
                        className={selectedButton === "-1" ? "selected-vote-button" : ""} >👎 -1</button>
                </section>
                <p id="vote-error">{voteError}</p>
                <br></br>
            </article>
            <Comments />
        </section>
    )
}

export default SingleArticle;