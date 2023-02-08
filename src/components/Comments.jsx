import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentPoster from "./CommentPoster";

function Comments() {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState();

    useEffect(() => {
        setCommentsLoading(true);
        getCommentsByArticleId(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi);
                setCommentsLoading(false);
            })
    }, [article_id])

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
            <CommentPoster setComments={setComments}/>
            <section className="comments-container">
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} />
                })}
            </section>
        </section>
    )
}

export default Comments;