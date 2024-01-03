// import .env file
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./src/auth/routes');

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({origin: [`http://localhost:${process.env.SERVER_PORT}`, `http://127.0.0.1:${process.env.SERVER_PORT}`, 'http://localhost:8888', 'http://127.0.0.1:8888']}));

const PORTA = process.env.AUTH_PORT || 8887

// Routes
app.use('/api/auth', authRoutes);


app.listen(PORTA, () => {
    console.log(`O servidor está a ouvir na porta ${PORTA}`)
})

