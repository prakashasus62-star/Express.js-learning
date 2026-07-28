const express = require("express");

const app = express();

app.get("/search", (req, res) => {

    const name = req.query.name;
    const age = req.query.age;

    res.json({
        name,
        age
    });

});

app.listen(3000);
