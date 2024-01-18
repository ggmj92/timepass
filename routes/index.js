const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const message = req.query.message ? `<p>${req.query.message}</p>` : '';
    res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TimePass</title>
    </head>
    <body>
        <header>
            <nav><a href="/">Home</a><a href="/contact"> Contact</a></nav>
            <h1>Welcome!</h1>
        </header>
        <h2>The current time is ${req.time}</h2>
        <button><a href="/endroute">Go to the end-route</a></h3></button>
    </body>
    </html>  
    `
    )
});

router.get('/contact', (req, res) => {
    res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TimePass</title>
    </head>
    <body>
        <header>
            <nav><a href="/">Home</a><a href="/about"> About</a></nav>
            <h1>Contact</h1>
        </header>
        <h2>The current time is ${req.time}</h2>
        <button><a href="/endroute">Go to the end-route</a></button>
        <p>GGMJ - Miami - 18.01.24</p>

    </body>
    </html>  
    `
    )
});

router.use((req, res) => {
    res
        .status(400)
        .send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TimePass</title>
        </head>
        <body>
            <header>
                <nav><a href="/">Home</a><a href="/contact"> Contact</a></nav>
                <h1>Page not found</h1>
            </header>
        </body>
        `
        )
})

module.exports = router;