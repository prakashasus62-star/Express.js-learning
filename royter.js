app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/user", (req, res) => {
    res.send("User Created");
});

app.put("/user", (req, res) => {
    res.send("User Updated");
});

app.delete("/user", (req, res) => {
    res.send("User Deleted");
});
