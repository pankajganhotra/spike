const TaskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const taskAuthorizationMiddleware = require('../middleware/taskAuthorizationMiddleware');

module.exports = router => {
    router.get(
        '',
        authMiddleware,
        TaskController.getAllTasks
    );

    router.post(
        '/add',
        authMiddleware,
        TaskController.addTask
    );

    router.put(
        '/update/:task_id',
        authMiddleware,
        taskAuthorizationMiddleware,
        TaskController.updateTask
    );

    router.delete(
        '/remove/:task_id',
        authMiddleware,
        taskAuthorizationMiddleware,
        TaskController.removeTask
    );
};