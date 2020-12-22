import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';

export default (req, res, next) => {
  // console.log(req.cookie('token'));
  //const token = req.header('x-auth-token');
  const JWT_SECRET = 'Its a secret';
  // Check for token
  // const token = req.header('Cookie');
  console.log('Auth Module');
  if (!req.header('Cookie')){
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
    try {
    const token = req.header('Cookie').split('=')[1];

    const decoded = jwt.verify(token, JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}