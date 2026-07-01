const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Backend Reddit Hub avviato!");
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});