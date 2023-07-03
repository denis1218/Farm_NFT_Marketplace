const express = require('express');
const router = express.Router();
const chartsController = require('../controllers/chartsController');



// Protect all routes after this middleware
// router.use(authController.protect);

router.get('/:type', chartsController.getChartData);
router.post('/', chartsController.addOne);

module.exports = router;