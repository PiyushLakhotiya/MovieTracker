import jwt from 'jsonwebtoken';


export default (req, res, next) => {
  const token = req.header('x-auth-token');
  const JWT_SECRET = 'Its a secret';
  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    // Add user from payload
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}