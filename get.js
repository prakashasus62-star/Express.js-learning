const express = require("express");

const app = express();

app.get("/student", (req, res) => {
    res.json({
        id: 1,
        name: "Prakash",
        course: "B.Tech IT"
    });
});

app.listen(3000);
