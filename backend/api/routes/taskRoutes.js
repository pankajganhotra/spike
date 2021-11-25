const TaskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const taskAuthorizationMiddleware = require('../middleware/taskAuthorizationMiddleware');

module.exports = router => {
    router.get(
        '/tasks',
        authMiddleware,
        TaskController.getAllTasks
    );
    router.post(
        '/tasks/add',
        authMiddleware,
        TaskController.addTask
    );
    router.put(
        '/tasks/update/:task_id',
        authMiddleware,
        taskAuthorizationMiddleware,
        TaskController.updateTask
    );

    router.delete(
        '/tasks/remove/:task_id',
        taskAuthorizationMiddleware,
        TaskController.removeTask
    );
};