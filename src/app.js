require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorhandler = require('./middleware/errorhandler');
const authRouter = require('./authentication/auth-router');

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

// Standard Middleware
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/register', null)

// Error Handler
app.use(errorhandler)

module.exports = app;