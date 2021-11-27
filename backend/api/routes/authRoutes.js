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
        failureRedirect: "http://localhost:3000/login?retry=true",
        successRedirect: "http://localhost:3000"
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