import { useState, useContext } from "react";
import { LoggedInUserContext } from '../contexts/LoggedInUserContext.js';
import { deleteComment } from "../utils/api.js";

function CommentCard({comment, setComments, newCommentId, setPosting}) {
    const { loggedInUser } = useContext(LoggedInUserContext);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState("");

    const handleDelete = (comment_id) => {
        setDeleteMessage("Deleting...")
        setDeleteStatus(true);
        if (comment_id === "tbc") {
            comment_id = newCommentId
        }
        deleteComment(comment_id).then(() => {
            setDeleteMessage("Your comment has been deleted.")
        }).catch((err) => {
            setDeleteStatus(false);
            setDeleteMessage("Something went wrong deleting this comment")
        })
    }

    return (
        <article className="comment-card">
        { deleteStatus ? <p className="feedback">{deleteMessage}</p> :   
            <div>
        <h4>{comment.author} </h4>
        <p>{comment.created_at}</p>
        <br></br>
        <p>{comment.body}</p>
        <br></br>
        <p>Votes: {comment.votes}</p>
        <button onClick={() => {handleDelete(comment.comment_id)}} hidden={loggedInUser.username !== comment.author}>Delete</button> 
        <p className="feedback">{deleteMessage}</p>
        </div>}
    </article>
   );
}

export default CommentCard;