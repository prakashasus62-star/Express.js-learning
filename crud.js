const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Prakash" },
    { id: 2, name: "Rahul" }
];

// Read
app.get("/students", (req, res) => {
    res.json(students);
});

// Create
app.post("/students", (req, res) => {
    students.push(req.body);
    res.json({
        message: "Student Added",
        students
    });
});

// Update
app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    students = students.map(student =>
        student.id === id ? req.body : student
    );

    res.json({
        message: "Student Updated",
        students
    });

});

// Delete
app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Student Deleted",
        students
    });

});

app.listen(3000);
