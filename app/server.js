const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    console.log(`User: ${name}, Email: ${email}`);

    res.send(`<h2>User ${name} added successfully ✅</h2>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});