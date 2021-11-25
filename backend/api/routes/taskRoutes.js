const TaskController = require('../controllers/taskController');

module.exports = router => {
    router.get('/tasks', TaskController.getAllTasks);
    router.post('/tasks/add', TaskController.addTask);
    router.put('/tasks/update/:task_id', TaskController.updateTask);
    router.delete('/tasks/remove/:task_id', TaskController.removeTask);
};