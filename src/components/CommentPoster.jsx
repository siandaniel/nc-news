function CommentPoster() {

    return (
        <form className="comment-poster">
            <label htmlFor="new-comment">Post a new comment:</label>
            <textarea
                id="new-comment"
                name="new-comment"
                required
            ></textarea>
            <button type="submit">Post</button>
        </form>
    );
}

export default CommentPoster;