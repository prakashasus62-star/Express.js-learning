app.post("/user", (req, res) => {

    console.log(req.body);

    res.send("Received");

});
