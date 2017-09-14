const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController')

/* GET users listing. */
router.get('/', controller.getAllUsers);
router.post('/signup', controller.signup);
router.post('/signin', controller.signin);

module.exports = router;
