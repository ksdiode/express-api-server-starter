const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY || 'secret';

// 서명
// jwt.sign(payload, secret)
// 검증
// jwt.verify(token, secret)
// 디코드
// jwt.decode(token)
