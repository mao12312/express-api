let express = require('express');
let router = express.Router();

// GET  http://localhost:3000/api/v1/article/test
router.get('/test', function (req, res) {
    res.json({
        message: "This is arl`tile api"
    });
});

// Prepare to treat router as a module
module.exports = router;