const { User, Profile } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.checkid = async (req, res) => {
    const { userid } = req.body;

    try {
        const resultCheckId = await User.findOne({ where: { userid } });
        if (resultCheckId) {
            res.json({ success: false, message: '사용할 수 없는 아이디 입니다.' });
        } else {
            res.json({ success: true, message: '사용가능한 아이디 입니다.' });
        }
    } catch (error) {
        res.json({ success: false, message: '오류가 발생하였습니다.', error });
    }
};

exports.signup = async (req, res) => {
    const { userid, userpw, username, age, address } = req.body;

    try {
        //비밀번호 암호화
        password = await bcrypt.hash(String(userpw), 11);
        const resultCreateUser = await User.create({
            userid,
            password,
        });
        const resultCreateProfile = await Profile.create({
            username,
            age,
            address,
            memberId: resultCreateUser.id,
        });
        res.json({ success: true, message: '회원가입을 축하드립니다.' });
    } catch (error) {
        res.json({ success: false, message: '오류가 발생하였습니다.', error });
    }
};
exports.login = async (req, res) => {
    const { userid, userpw } = req.body;
    try {
        const result = await User.findOne({ where: { userid } });
        const passwordCheck = await bcrypt.compare(userpw, result.password);

        if (result && passwordCheck) {
            const token = jwt.sign({ id: result.id }, process.env.SECRET, { expiresIn: '24h' });
            res.json({ success: true, message: '환영합니다', token });
        } else {
            res.json({ success: false, message: '아이디 또는 비밀번호를 확인하세요.' });
        }
    } catch (error) {
        res.json({ success: false, message: '아이디 또는 비밀번호를 확인하세요.' });
    }
};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
