const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');



// Protect all routes after this middleware
// router.use(authController.protect);

router.get('/get', usersController.getAllUsers);
router.post('/setip/:wallet', usersController.setIPAddressForWallet);
router.post('/profile/:wallet', usersController.updateProfile);

module.exports = router;