import { useState } from "react";
import { postComment } from "../utils/api";

function CommentPoster() {
    const [newComment, setNewComment] = useState({
        "body": "",
        "username": "cooljmessy"
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
        //need to add article ID! Import via props from previous?
        postComment(newComment)
            .then((postedComment) => {
                console.log(postedComment, "<<POSTED COMMENT")
            })
        // setSubmitStatus(true)
        // setNewItem({
        //     "item_name": "",
        //     "description": "",
        //     "img_url": "",
        //     "price": "",
        //     "category_name": ""
        // });
    }

    return (
        <form onSubmit={handleSubmit} className="comment-poster">
            <label htmlFor="new-comment">Post a new comment:</label>
            <textarea
                id="new-comment"
                name="new-comment"
                value={newComment.body}
                required
                onChange={onChange}
            ></textarea>
            <button type="submit">Post</button>
        </form>
    );
}

export default CommentPoster;