const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root1234',
    database: 'examen_db'
});

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO users (username, password, email) VALUES (?,?,?)",
            [username, hash, email],
                (err, result) => {
                    console.log(err)
                });
    });
});

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username= ?",
        username,
        (err, result) => {
            if (err) {
            res.send({err: err})
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error,response) => {
                    if (response) {
                        res.send(result)
                    } else {
                        res.send({ message: "Wrong username or password." });             
                    }
                 });
            } else {
                res.send({ message: "User doesnt exist."})
            }
        }
    );
});



app.listen(3001, () => {
    console.log('server running')
});