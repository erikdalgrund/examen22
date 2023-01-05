const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: "userId",
    secret: "SecretAccesToken",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 12,
    },
}));

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

app.get('/login', (req,res) => {
    if (req.session.user){
        res.send({
            loggedIn: true,
            user: req.session.user 
        });
    } else {
        res.send({loggedIn: false});
    }
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
                        req.session.user = result;
                        console.log(req.session.user);
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