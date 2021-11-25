const Cookies = require('cookies');

// exports.login = async (req, res, next) => {
//     const cookies = new Cookies(req, res);
//     const sessionCookie = cookies.get('connect.sid');
//     console.log({ sessionCookie });
//     res.cookie('connect.sid', sessionCookie, {
//         httpOnly: true,
//         secure: false,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     });
//     res.status(200).json({
//         auth: true,
//         user: req.user,
//         message: 'Login successful'
//     });
// };

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