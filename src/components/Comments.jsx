import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentPoster from "./CommentPoster";

function Comments() {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi)
            })
    }, [article_id])

    return (
        <section className="comments-section">
            <h3>Comments</h3>
            <CommentPoster/>
            <section className="comments-container">
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} />
                })}
            </section>
        </section>
    )
}

export default Comments;