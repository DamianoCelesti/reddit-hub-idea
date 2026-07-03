const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3000;

app.get("/api/posts", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Post di prova",
            subreddit: "AppIdeas",
            score: 120,
            comments: 35,
        },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});