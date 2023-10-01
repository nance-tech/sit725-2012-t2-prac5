const express = require('express')

const router = express.Router();
const controller = require('../controllers/controller.js');

router.post('/cat', (req, res) => {
    controller.postCat(req, res);
});


router.get('/cats', (req, res) => {
    controller.getAllCats(req, res)
});


module.exports = router;