import { useState, useContext } from "react";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';
import { deleteComment } from "../utils/api.js";

function CommentCard({comment, setComments}) {
    const { loggedInUser } = useContext(LoggedInUserContext);
    const [deleteStatus, setDeleteStatus] = useState("");

    const handleDelete = (comment_id) => {
        setDeleteStatus("loading")
        setTimeout(5000)
            setComments((currComments) => {
                return currComments.filter((currComment) => {
                    return currComment.comment_id !== comment_id
                })
            })
        deleteComment(comment_id)
        .then(() => {
            setDeleteStatus("");
        })
        .catch((err) => {
            setComments((currComments) => {
                return [comment, ...currComments]
            })
            setDeleteStatus("error");
        })
    }

    return (
        <article className="comment-card">
            <h4>{comment.author} </h4>
            <p>{comment.created_at}</p>
            <br></br>
            <p>{comment.body}</p>
            <br></br>
            <p>Votes: {comment.votes}</p>
            <button onClick={(e) => {handleDelete(comment.comment_id)}} hidden={loggedInUser.username !== comment.author}>Delete</button>
            <p>{deleteStatus === "loading" ? "Deleting" : 
                deleteStatus === "error" ? "Oops - something went wrong!" : "" }</p>
        </article>
   );
}

export default CommentCard;