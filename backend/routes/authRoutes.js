const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');


router.post('/register', authController.register);
router.get('/isAdmin/:wallet', authController.isAdmin);

// Protect all routes after this middleware
// router.use(authController.protect);


module.exports = router;