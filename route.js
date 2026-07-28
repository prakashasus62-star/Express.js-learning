const express = require("express");

const app = express();

app.get("/student/:id", (req, res) => {

    const id = req.params.id;

    res.send(`Student ID : ${id}`);

});

app.listen(3000);
