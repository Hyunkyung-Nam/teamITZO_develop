//메인 페이지 열기
exports.main = (req, res) => {
    res.render('index');
};
//테마관련 페이지 열기
exports.theme = (req, res) => {
    res.render('main/theme_main');
};
exports.themeSearch = (req, res) => {
    res.render('main/theme_search');
};
//지도 관련 페이지 열기
exports.map = (req, res) => {
    res.render('main/map');
};

//랜덤 관련 페이지 열기
exports.random = (req, res) => {
    res.render('main/random');
};
exports.randomMap = (req, res) => {
    res.render('main/random_map');
};
exports.randomKeyword = (req, res) => {
    res.render('main/random_keyword');
};
//상세페이지 열기
exports.content = (req, res) => {
    res.render('main/show_content');
};
//커뮤니티 열기
exports.community = (req, res) => {
    res.render('main/community');
};

//유저관련 페이지 열기
exports.signup = (req, res) => {
    res.render('user/signup');
};
exports.login = (req, res) => {
    res.render('user/login');
};
exports.profile = (req, res) => {
    res.render('user/profile');
};
