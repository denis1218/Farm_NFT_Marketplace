const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');



// Protect all routes after this middleware
// router.use(authController.protect);

// router.post('/', salesController.addOne);
router.get('/income', salesController.getIncome);

module.exports = router;