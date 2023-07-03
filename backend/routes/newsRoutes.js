const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const newsController = require('../controllers/newsController');



// Protect all routes after this middleware
// router.use(authController.protect);

router.get('/get', newsController.getAllNews);
router.post('/add', newsController.addNews);

module.exports = router;