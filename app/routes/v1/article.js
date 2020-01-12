let express = require('express');
let router = express.Router();
let ArticleModel = require('../../models/articleModel')

// GET  http://localhost:3000/api/v1/article/test
router.get('/test', function (req, res) {
    res.json({
        message: "This is arl`tile api"
    });
});

router.post('/', function (req, res) {
    let Article = new ArticleModel();

    Article.title = req.body.title;
    Article.text = req.body.text;
    Article.setDate();

    Article.save(function (err) {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: "success" });
        }
    });
});

router.get('/', function (req, res) {
    ArticleModel
        .find()
        .then(function (article) {
            res.json(article);
        });
});

router.get('/:id', function (req, res) {
    let Articleid = req.params.id;
    ArticleModel
        .findById(Articleid, function (err, article) {
            res.json(article);
        });

});

router.delete('/:id', function (req, res) {
    let Articleid = req.params.id;
    ArticleModel.remove({ _id: Articleid })
        .then(function () {
            res.json({ message: "success" })
        })

});

// Prepare to treat router as a module
module.exports = router;