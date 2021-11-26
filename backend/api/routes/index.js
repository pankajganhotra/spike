const router = require('express').Router();


//Auth Routes
router.use('/auth', require('./authRoutes'));

//Task Routes
router.use('/tasks', require('./taskRoutes'));


module.exports = router;