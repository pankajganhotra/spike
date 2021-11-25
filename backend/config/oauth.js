const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const User = require('../api/models/user_model');
// const User = mongoose.model('User');

const serializeUser = function (user, done) {
    done(null, user);
};
const deserializeUser = function (user, done) {
    done(null, user);
}

const oauthStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await User.findOneAndUpdate({ 'googleId': profile.id }, {
                email: profile.emails[0].value,
                name: profile.displayName,
                googleId: profile.id,
            }, { upsert: true, new: true });
            done(null, user);
        } catch (err) {
            console.error(err);
            done(err);
        }
    }
);

module.exports = {
    serializeUser,
    deserializeUser,
    oauthStrategy
}
