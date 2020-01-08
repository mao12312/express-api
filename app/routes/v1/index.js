let express = require('express');
// routing
let router = express.Router();

// routing behavior
router.use('/article', require('./article.js'));
router.use('/user',require('./user.js'));

// Prepare to treat router as a module
module.exports = router;