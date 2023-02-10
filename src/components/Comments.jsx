import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';
import CommentCard from "./CommentCard";
import CommentPoster from "./CommentPoster";

function Comments() {
    const { article_id } = useParams();
    const { loggedInUser } = useContext(LoggedInUserContext);
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState();
    const [posting, setPosting] = useState("");
    const [newCommentId, setNewCommentId] = useState("");

    useEffect(() => {
        setPosting("");
        setCommentsLoading(true);
        getCommentsByArticleId(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
                setCommentsLoading(false);
            })
    }, [article_id, loggedInUser])

    if (commentsLoading) {
        return (
            <div id="comment-loading">
            <p>Comments Loading...</p>
            <img src="https://i.stack.imgur.com/kOnzy.gif" alt="loading"/>
            </div>
        )
    }

    return (
        <section className="comments-section">
            <h3>Comments</h3>
            {comments.length === 0 ? <p><b>There are no comments on this article yet. </b><em>Want to be the first to post?</em></p>: "" }
            {comments.length === 0 ? <br></br> : "" }
            <CommentPoster setComments={setComments} posting={posting} setPosting={setPosting} newCommentId={newCommentId} setNewCommentId={setNewCommentId}/>
            <section className="comments-container">
                {comments.map((comment) => {
                    return <CommentCard comment={comment} setPosting={setPosting} newCommentId={newCommentId} key={comment.comment_id === "tbc" ? comment.created_at : comment.comment_id} setComments={setComments} />
                })}
            </section>
        </section>
    )
}

export default Comments;