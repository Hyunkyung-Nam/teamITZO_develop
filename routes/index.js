const express = require('express');
const controller = require('../controller/');
const router = express.Router();

//메인
router.get('/', controller.main);
//theme관련 페이지
router.get('/theme', controller.theme);
router.get('/theme/search', controller.themeSearch);
router.get('/theme/content', controller.content);
//map관려페이지
router.get('/map', controller.map);
router.get('/map/content', controller.content);
//랜덤관련 페이지
router.get('/random', controller.random);
router.get('/random/map', controller.randomMap);
router.get('/random/keyword', controller.randomKeyword);
router.get('/random/content', controller.content);
//커뮤니티
router.get('/community', controller.community);

//회원관련페이지
router.get('/user/signup', controller.signup);
router.get('/user/login', controller.login);
router.get('/user/profile', controller.profile);

module.exports = router;
