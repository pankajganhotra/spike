const router = require('express').Router();


//Auth Routes
require('./authRoutes')(router);
//Task Routes
require('./taskRoutes')(router);

module.exports = router;