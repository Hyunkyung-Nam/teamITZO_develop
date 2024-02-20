const express = require('express');
const controller = require('../controller/community');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const upload = multer({
    dest: 'uploads/',
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, './public/uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.get('/all', controller.all);
router.post('/write', uploadDetail.single('file'), controller.write);

module.exports = router;
