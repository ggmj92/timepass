const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
            <h1>Welcome to the End-Route!</h1>
        </header>
    </body>
    </html>  
    `
    );
});

module.exports = router;