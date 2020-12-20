import bcrypt from 'bcrypt';
import User from '../Models/User.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const {email, password, username} = req.body;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({ email: email, password: hash, username: username});
    await user.save();
    jwt.sign(
        {id: user.id},
        "Its a secret",
        // {expiresIn: 3600},
        (err, token) => {
            if(err) throw err;
            res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            })
        }
    )
}   