const express = require('express');
const router = express.Router();
const joinListController = require('../controllers/joinListController');



// Protect all routes after this middleware
// router.use(authController.protect);

router.get('/', joinListController.getAllJoinList);
router.post('/', joinListController.addOne);

module.exports = router;