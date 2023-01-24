const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const prices = require("./productInfo.js")


app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Register user request

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
                console.log(result)
            });
    });
});

// Login request

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({
            loggedIn: true,
            user: req.session.user,
        });
    } else {
        res.send({ loggedIn: false });
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
                res.send({ err: err })
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result)
                    } else {
                        res.send({ message: "Wrong username or password." });
                    }
                });
            } else {
                res.send({ message: "User doesnt exist." })
            }
        }
    );
});

// Logout request

app.post('/logout', (req, res) => {
    res.clearCookie('userId', '/');
    return res.status(200).redirect('/login');
  });

// Stripe for payments 

const stripe = require('stripe')('sk_test_51Lhwd3FJj3pT3x2iTLGk88QncERCO0AsxYT3zw42rIWN7zEg25248Ll7sQ776oRVfwAu3HnvkJCzmDpWPfAtSbhO0060eQuJbs');
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';


app.post('/create-checkout-session', async (req, res) => {
    let line_items = []
    for (const [key, value] of Object.entries(req.body)) {
        const price = prices[key].price;
        const description = prices[key].description;
        const name = prices[key].productName;
        const product = {
            price_data: {
                currency: "usd",
                product_data: {
                    name: name,
                    description: description,
                    metadata: {
                        id: key
                    },
                },
                unit_amount: price * 100,
            },
            quantity: value
        }
    
        line_items.push(product);
    }

    const session = await stripe.checkout.sessions.create({

        line_items,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/checkout-success`,
        cancel_url: `${YOUR_DOMAIN}/cart`,
    });
    // res.send(line_items)
    res.send({url: session.url});
});

app.listen(3001, () => {
    console.log('server running on port 3001')
});
