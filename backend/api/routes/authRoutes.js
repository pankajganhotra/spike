const passport = require("passport");
const AuthController = require("../controllers/authController");

module.exports = router => {
    router.get(
        "/auth/google",
        passport.authenticate("google", { scope: ["email"] })
    );

    router.get(
        "/auth/google/callback",
        passport.authenticate("google", {
            failureRedirect: "http://localhost:3000",
            successRedirect: "http://localhost:3000"
        }),
        // AuthController.login
    );

    router.get("/auth/session", (req, res, next) => {
        console.log(req.user);
        console.log(req.session);
        console.log(req.headers); next();
    }, AuthController.session);

    router.get("/auth/logout", AuthController.logout);
};