import { useEffect, useState } from "react";
import { getSubredditPosts } from "../services/redditApi";
import PostCard from "../components/PostCard";

const subreddits = [
    "AppIdeas",
    "SomebodyMakeThis",
    "Entrepreneur",
    "SaaS",
    "startups",
    "SideProject",
    "webdev",
];

function Home() {
    const [posts, setPosts] = useState([]);
    const [selectedSubreddit, setSelectedSubreddit] = useState("AppIdeas");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);

            const data = await getSubredditPosts(selectedSubreddit);

            setPosts(data);
            setLoading(false);
        };

        fetchPosts();
    }, [selectedSubreddit]);

    return (
        <main className="container">
            <h1>Reddit App Ideas</h1>

            <p>
                Trova idee per app, SaaS e progetti partendo dai problemi reali discussi
                su Reddit.
            </p>

            <select
                value={selectedSubreddit}
                onChange={(e) => setSelectedSubreddit(e.target.value)}
            >
                {subreddits.map((subreddit) => (
                    <option key={subreddit} value={subreddit}>
                        r/{subreddit}
                    </option>
                ))}
            </select>

            {loading && <p>Caricamento post...</p>}

            <section className="posts-list">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </section>
        </main>
    );
}

export default Home;