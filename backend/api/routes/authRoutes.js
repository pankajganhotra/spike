const passport = require("passport");
const AuthController = require("../controllers/authController");


module.exports = router => {
    //Google Register/Login
    router.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: [
                "email",
                "profile",
                "https://www.googleapis.com/auth/calendar.readonly"
            ]
        })
    );

    //Google OAuth callback route
    router.get(
        "/auth/google/callback",
        passport.authenticate("google", {
            failWithError: true,
            failureRedirect: "http://localhost:3000/login?retry=true",
            successRedirect: "http://localhost:3000"
        }),
    );
    //Verify Session
    router.get(
        "/auth/session",
        AuthController.session
    );

    //Logout
    router.get(
        "/auth/logout",
        AuthController.logout
    );
};