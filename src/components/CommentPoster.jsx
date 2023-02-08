import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';

function CommentPoster({setComments}) {
    const { article_id } = useParams();
    const { loggedInUser } = useContext(LoggedInUserContext);
    const [newComment, setNewComment] = useState({
        "body": "",
        "username": loggedInUser.username
    })
    const [posting, setPosting] = useState("");

    const onChange = (e) => {
        setNewComment((currNewComment) => {
            return {
                ...currNewComment,
                body: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPosting("posting")
        postComment(article_id, newComment)
            .then((postedComment) => {
                setComments((currComments) => {
                    return [postedComment, ...currComments]
                })
                setPosting("posted");
                setNewComment({
                    "body": "",
                    "username": loggedInUser.username
                });
            })
    }

    return (
        <section>
        <form onSubmit={handleSubmit} className="comment-poster">
            <label htmlFor="new-comment">Post a new comment:</label>
            <textarea
                id="new-comment"
                name="new-comment"
                value={newComment.body}
                required
                onChange={onChange}
            ></textarea>
            <button type="submit" disabled={posting === "posting"}>Post</button>
        </form>
        {posting === "posting" ? <p className="feedback">Posting...</p> : posting === "posted" ? <p className="feedback">Your comment has been posted!</p> : ""}
        </section>
    );
}

export default CommentPoster;