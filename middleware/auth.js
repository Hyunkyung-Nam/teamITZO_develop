const jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
    const headerAuth = req.headers.authorization;
    if (!headerAuth) {
        //401 : 클라이언트가 인증되지 않았거나 유요한 인증정보가 부족하여 요청이 거부
        return res.status(401).json({ success: false });
    }
    const [_, token] = headerAuth.split(' ');

    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) {
            //403 : 서버에 요청이 전달되었지만 권한으로 인한 거절
            return res.status(403).json({ success: false });
        }
        req.user = decode;
        next();
    });
};
