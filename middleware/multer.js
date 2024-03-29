const multer = require('multer');
const path = require('path');

exports.uploadDetail = multer({
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
