import bcrypt from 'bcrypt';
import User from '../Models/User.js';
import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser';

export const login = async (req, res) => {
    const {email, password} = req.body;
    const JWT_SECRET = 'Its a secret';
    try {
        // Check for existing user
        const user = await User.findOne({ email });
        if (!user) throw Error('User does not exist');
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid credentials');
    
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        if (!token) throw Error('Couldnt sign the token');

        // res.cookie('token', token, {  sameSite: false });
        
        res.status(200).json({
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      } catch (e) {
        res.status(400).json({ msg: e.message });
      }
    };
