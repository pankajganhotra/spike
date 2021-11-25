const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = async (req, res, next) => {
    try {
        const task = await Task.findOne({ _id: req.params.task_id });

        if (!task) {
            return res.status(400).send({
                message: 'Invalid Task ID , Task not found'
            })
        }

        if (task.user_id !== req.user._id) {
            return res.status(403).send({
                message: 'No Access to this task'
            })
        }
        next();
    } catch (error) {
        res.status(500).send({
            message: 'Fetching tasks failed!'
        });
    }

}

