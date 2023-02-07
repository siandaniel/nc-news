function CommentCard({comment}) {
    return (
        <article className="comment-card">
            <p>{comment.body}</p>
            <p>{comment.author} </p>
            <p>Votes: {comment.votes}</p>
            <p>{comment.created_at}</p>
        </article>
    );
}

export default CommentCard;