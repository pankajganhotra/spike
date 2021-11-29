require("dotenv").config();
const express = require('express');
const app = express();
const { urlencoded, json } = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/database');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const oauthConfig = require('./config/oauth');

//Connect to MongoDB
mongoose.Promise = global.Promise;//Use ES6 promises  
mongoose.connect(dbConfig.url, dbConfig.options).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Connection failed', err);
    process.exit(0);
});


//Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: dbConfig.url
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,// 1 week
        secure: true
    }
}));


//Includes all Models
require('./api/models/index');

//Passport Config
passport.serializeUser(oauthConfig.serializeUser);
passport.deserializeUser(oauthConfig.deserializeUser);
passport.use("google", oauthConfig.oauthStrategy);
//Passport Initialize
app.use(passport.initialize());
app.use(passport.session());
//Cors Setup
app.use(cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
}));
//Body Parser
app.use(urlencoded({ extended: false, limit: '50mb' }));
app.use(json({ limit: '50mb' }));

//Routes
const routes = require('./api/routes');
app.use(routes);

app.get("/", (req, res) => {
    return res.json({
        status: "Server Running"
    });
})


//Error Handling
const errorHandler = require('./api/helpers/errorHandler');
app.use(errorHandler);

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on ${HOST}:${PORT} ENV:${process.env.NODE_ENV}`);
})





