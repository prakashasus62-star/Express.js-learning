const express = require("express");

const app = express();

function logger(req, res, next) {

    console.log(req.method);
    console.log(req.url);

    next();

}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Middleware Example");
});

app.listen(3000);
