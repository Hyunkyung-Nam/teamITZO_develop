const express = require('express');
const controller = require('../controller/user');
const router = express.Router();

router.post('/checkid', controller.checkid);
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.patch('/update', controller.update);
router.delete('/delete', controller.delete);

module.exports = router;
