const express = require('express');
const controller = require('../controller/user');
const { isAuth } = require('../middleware/auth');
const router = express.Router();

router.post('/checkid', controller.checkid);
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.patch('/update', isAuth, controller.update);
router.delete('/delete', isAuth, controller.delete);

module.exports = router;
