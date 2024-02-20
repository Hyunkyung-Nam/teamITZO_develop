const express = require('express');
const controller = require('../controller/community');
const multer = require('../middleware/multer');
const { isAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/all', controller.all);
router.post('/write', isAuth, multer.uploadDetail.single('file'), controller.write);
router.get('/:id', controller.datail);

module.exports = router;
