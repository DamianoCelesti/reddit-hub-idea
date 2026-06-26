import { useState } from "react";
import { getSubredditPosts } from "../services/redditApi";
import PostCard from "../components/PostCard";

const subreddits = [
    "AppIdeas",
    "SomebodyMakeThis",
    "SaaS",
    "microsaas",
    "startups",
    "Entrepreneur",
    "SideProject",
    "indiehackers",
    "smallbusiness",
    "ecommerce",
    "webdev",
    "productivity",
];

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSavedPosts = () => {
        return JSON.parse(localStorage.getItem("savedPosts")) || [];
    };


    const fetchNewPosts = async () => {
        setLoading(true);

        const data = await getSubredditPosts("AppIdeas");

        console.log("POST ARRIVATI DA REDDIT:", data);

        setPosts(data);

        setLoading(false);
    };
    // const fetchNewPosts = async () => {
    //     setLoading(true);

    //     const savedPosts = getSavedPosts();
    //     const savedPostIds = savedPosts.map((post) => post.id);

    //     const requests = subreddits.map((subreddit) => {
    //         return getSubredditPosts(subreddit);
    //     });

    //     const results = await Promise.all(requests);
    //     const allPosts = results.flat();

    //     const newPosts = allPosts.filter((post) => {
    //         return !savedPostIds.includes(post.id);
    //     });

    //     setPosts(newPosts);
    //     setLoading(false);
    // };

    const savePost = (postToSave) => {
        const savedPosts = getSavedPosts();

        const alreadySaved = savedPosts.some((post) => {
            return post.id === postToSave.id;
        });

        if (alreadySaved) {
            return;
        }

        const updatedSavedPosts = [...savedPosts, postToSave];

        localStorage.setItem("savedPosts", JSON.stringify(updatedSavedPosts));

        setPosts(
            posts.filter((post) => {
                return post.id !== postToSave.id;
            })
        );
    };

    return (
        <main className="container">
            <h1>Reddit App Ideas</h1>

            <p>
                Premi il bottone per caricare i post hot dai subreddit scelti.
                I post già salvati non verranno mostrati di nuovo.
            </p>

            <button onClick={fetchNewPosts} disabled={loading}>
                {loading ? "Caricamento..." : "Carica nuovi post"}
            </button>

            <section className="posts-list">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} onSave={savePost} />
                ))}
            </section>
        </main>
    );
}

export default Home;