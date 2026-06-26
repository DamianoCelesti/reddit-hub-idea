function PostCard({ post, onSave }) {
    return (
        <article className="post-card">
            <h2>{post.title}</h2>

            <p>
                <strong>Subreddit:</strong> r/{post.subreddit}
            </p>

            <p>
                <strong>Score:</strong> {post.score} |{" "}
                <strong>Commenti:</strong> {post.comments}
            </p>

            {post.selftext && (
                <p>
                    {post.selftext.length > 250
                        ? post.selftext.slice(0, 250) + "..."
                        : post.selftext}
                </p>
            )}

            <a href={post.url} target="_blank" rel="noreferrer">
                Apri su Reddit
            </a>

            {onSave && (
                <button onClick={() => onSave(post)}>
                    Salva post
                </button>
            )}
        </article>
    );
}

export default PostCard;