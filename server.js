require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser');

//Routers


const app = express();

//CORS
app.use(cors({
    origin: '*', // Change to origin: ['https://example.com', 'https://another.example.com']
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    limit: '10mb',
}));
//Use react/vite for views
app.use(express.static(path.join(__dirname, "client", "dist")));
//Middleware
app.use(logger("dev"));
app.use(express.json({})); //Use json instead of html
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

//Connect to db

//Routes
