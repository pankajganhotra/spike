const passport = require("passport");
const AuthController = require("../controllers/authController");

const router = require("express").Router();

//Google Register/Login
router.get(
    "/google",
    passport.authenticate("google", {
        scope: [
            "email",
            "profile",
            "https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/calendar.readonly"
        ]
    })
);

//Google OAuth callback route
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failWithError: true,
        failureRedirect: (process.env.NODE_ENV === 'production'
            ? process.env.PROD_FRONTEND_URL
            : process.env.DEV_FRONTEND_URL) + "/login?retry=true",
        successRedirect: process.env.NODE_ENV === 'production'
            ? process.env.PROD_FRONTEND_URL
            : process.env.DEV_FRONTEND_URL
    }),
);

//Verify Session
router.get(
    "/session",
    AuthController.session
);

//Logout
router.get(
    "/logout",
    AuthController.logout
);

module.exports = router;