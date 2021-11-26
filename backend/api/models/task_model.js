const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4 } = require("uuid");

const taskSchema = new Schema({
    _id: {
        type: String,
        default: v4,
    },
    user_id: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);