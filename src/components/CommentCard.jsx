function CommentCard({comment}) {
    return (
        <article className="comment-card">
            <h4>{comment.author} </h4>
            <p>{comment.created_at}</p>
            <br></br>
            <p>{comment.body}</p>
            <br></br>
            <p>Votes: {comment.votes}</p>
        </article>
    );
}

export default CommentCard;