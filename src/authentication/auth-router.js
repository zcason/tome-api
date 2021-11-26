const express = require('express');

const authRouter = express.Router();

// auth login
authRouter.get('/login', (req, res) => {
    res.render('login');

});

// auth logout
authRouter.get('/logout', (req, res) => {
    // handle with passport
    res.render('logged out');
});



module.exports = authRouter;