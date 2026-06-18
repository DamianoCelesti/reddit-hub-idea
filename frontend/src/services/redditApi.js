const BASE_URL = "https://www.reddit.com/r";

export const getSubredditPosts = async (subreddit) => {
    try {
        const response = await fetch(`${BASE_URL}/${subreddit}/hot.json`);

        if (!response.ok) {
            throw new Error("Errore nella richiesta a Reddit");
        }

        const data = await response.json();

        return data.data.children.map((item) => {
            const post = item.data;

            return {
                id: post.id,
                title: post.title,
                author: post.author,
                subreddit: post.subreddit,
                score: post.score,
                comments: post.num_comments,
                url: `https://www.reddit.com${post.permalink}`,
                created: post.created_utc,
                selftext: post.selftext,
            };
        });
    } catch (error) {
        console.error("Errore nel recupero dei post:", error);
        return [];
    }
};