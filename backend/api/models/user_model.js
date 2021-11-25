const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4 } = require("uuid")

const userSchema = new Schema({
    _id: {
        type: String,
        default: v4,
    },
    displayName: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    taskCount: {
        type: Number,
        default: 0,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);