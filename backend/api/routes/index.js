const router = require('express').Router();


//Auth Routes
require('./authRoutes')(router);
//Task Routes
// router.use('/api/', require('./taskRoutes'));
module.exports = router;