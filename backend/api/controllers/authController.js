const Cookies = require('cookies');
const passport = require('passport');

exports.login = async (req, res, next) => {
    let redirectUrl = "http://localhost:3000";
    console.log(req.body);

    passport.authenticate("google", {
        scope: ['profile', 'email'],
        failureRedirect: redirectUrl + "?retry=true",
        successRedirect: redirectUrl,
        passReqToCallback: true
    }, (req, err, user, info) => {
        console.log("Callback-Passport");
        //check response sent by passport
        console.log({ req: req.query, err, user, info })
        res.send(req.query);
    });
    res.redirect(redirectUrl);
};

exports.logout = async (req, res, next) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.status(200).json({
        auth: false,
        message: 'Logout successful'
    });
};

exports.session = async (req, res, next) => {
    if (req.user) {
        res.status(200).json({
            auth: true,
            user: req.user,
            message: 'Session successful'
        });
    } else {
        res.status(401).json({
            auth: false,
            message: 'No session'
        });
    }
};