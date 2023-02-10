import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';

function CommentPoster({setComments, posting, setPosting, newCommentId, setNewCommentId}) {
    const { article_id } = useParams();
    const { loggedInUser } = useContext(LoggedInUserContext);
    const [newComment, setNewComment] = useState({
        "body": "",
        "username": loggedInUser.username
    })

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
        setPosting("posting");
        if (loggedInUser.username === "none") {
            setPosting("loggedout");
            return;
        }
        setComments((currComments) => {
            return [{
                "comment_id": "tbc",
                "body": newComment.body,
                "article_id": article_id,
                "author": loggedInUser.username,
                "votes": 0,
                "created_at": "Just now"
            }, ...currComments]
        })
        postComment(article_id, newComment)
            .then((postedComment) => {
                setPosting("posted");
                setNewComment({
                    "body": "",
                    "username": loggedInUser.username
                });
                setNewCommentId(postedComment.comment_id)
            })
            .catch((err) => {
                setPosting("error");
                setComments((currComments) => {
                    const revisedComments = [...currComments]
                    revisedComments.shift()
                    return revisedComments
                })
                setNewCommentId("")
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
        {posting === "posting" ? <p className="feedback">Posting...</p> : 
        posting === "posted" ? <p className="feedback">Your comment has been posted!</p> :
        posting === "error" ? <p className="feedback">Oops - something went wrong!</p> :
        posting === "loggedout" ? <p className="feedback">You must be logged in to post</p> : ""}
        </section>
    );
}

export default CommentPoster;