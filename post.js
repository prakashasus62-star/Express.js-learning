const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    res.json({
        message: "Login Successful",
        username,
        password
    });

});

app.listen(3000);
