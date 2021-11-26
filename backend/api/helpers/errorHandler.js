const mongoose = require('mongoose');

module.exports = async (err, req, res, next) => {
    try {
        if (err instanceof mongoose.Error) {
            return res.status(400).json({
                status: 'error',
                message: err.message
            });
        }
        return res.status(500).json({
            error: err,
            message: 'Internal server error'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
            error: err,
        });
    }
}



// const handleValidationError(err, res) {
//     //If a mongoose error {ValidationError, CastError} --> 400
//     Object.keys(err.errors).forEach(key => {
//         if (err.errors[key].name === 'CastError') {
//             err.errors[key] = `${key} must be a ${err.errors[key].kind}`
//         }
//         if (err.errors[key].name === 'ValidatorError') {
//             switch (err.errors[key].kind) {
//                 case 'required':
//                     err.errors[key].message = `${key} is required`
//                     break;
//                 case 'min':
//                     err.errors[key].message = `${key} must be greater than ${err.errors[key].properties.min}`
//                     break;
//                 case 'max':
//                     err.errors[key].message = `${key} must be less ${err.errors[key].properties.max}`
//                     break;
//                 case 'enum':
//                     err.errors[key].message = `${key} must be one of the following: ${err.errors[key].enumValues.join(', ')}`
//                     break;
//                 default:
//                     err.errors[key].message = `${key} is invalid`
//                     break;
//             }
//         }
//     });
// }
