const mongoose = require('mongoose')
const Task = mongoose.model('Task')

exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({ user_id: req.user._id })
        res.send({
            tasks,
            count: tasks.length,
            message: 'Tasks fetched successfully'
        })
    } catch (error) {
        next(error)
    }
}
exports.addTask = async (req, res, next) => {
    try {
        const task = await Task.create({
            ...req.body,
            user_id: req.user._id
        })
        res.send({
            task,
            message: 'Task added successfully'
        })
    } catch (error) {
        next(error)
    }
}
exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndUpdate({
            _id: req.params.task_id,
            user_id: req.user._id
        }, {
            $set: {
                ...req.body,
                user_id: req.user._id // to prevent user from changing the user_id
            }
        }, {
            new: true,
            runValidators: true
        })
        res.send({
            task,
            message: 'Task updated successfully'
        })
    } catch (error) {
        next(error)
    }
}

exports.removeTask = async (req, res, next) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.task_id,
            user_id: req.user._id
        })
        res.send({
            task,
            message: 'Task removed successfully'
        })
    } catch (error) {
        next(error)
    }
}