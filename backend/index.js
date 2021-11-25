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
        secure: false
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
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}));
//Body Parser
app.use(urlencoded({ extended: false, limit: '50mb' }));
app.use(json({ limit: '50mb' }));

//Routes
const routes = require('./api/routes');
const { options } = require("./api/routes");
app.use(routes);

app.listen(4000, () => {
    console.log('Server started on port 5000');
})




