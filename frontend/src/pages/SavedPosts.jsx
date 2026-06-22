import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function SavedPosts() {
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("savedPosts")) || [];
        setSavedPosts(data);
    }, []);

    const removePost = (postId) => {
        const updatedPosts = savedPosts.filter((post) => {
            return post.id !== postId;
        });

        setSavedPosts(updatedPosts);
        localStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
    };

    return (
        <main className="container">
            <h1>Post salvati</h1>

            {savedPosts.length === 0 && <p>Non hai ancora salvato nessun post.</p>}

            <section className="posts-list">
                {savedPosts.map((post) => (
                    <div key={post.id}>
                        <PostCard post={post} />

                        <button onClick={() => removePost(post.id)}>
                            Rimuovi dai salvati
                        </button>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default SavedPosts;