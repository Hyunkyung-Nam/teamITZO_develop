const { Community } = require('../models');

exports.all = async (req, res) => {
    try {
        const result = await Community.findAll();
        console.log(result);
        if (result) {
            res.json({ success: true, result });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.log('comminity get all error', error);
    }
};
exports.write = async (req, res) => {
    const { filename } = req.file;
    const { userid, title, content } = req.body;
    try {
        const result = await Community.create({ imgPath: filename, title, content }, { where: { userid } });
        if (result) {
            res.json({ success: true, message: '글작성을 완료하였습니다.' });
        } else {
            res.json({ success: false, message: '글작성을 실패하였습니다.' });
        }
    } catch (error) {
        res.json({ success: false, message: '오류가 발생하였습니다', error });
    }
};
