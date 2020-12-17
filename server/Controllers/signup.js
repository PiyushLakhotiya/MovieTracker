import bcrypt from 'bcrypt';
import User from '../Models/User.js';

export const signUp = async (req, res) => {
    const {email, password, username} = req.body;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const user = new User({ email: email, password: hash, username: username});
    await user.save();
    req.session.user_id = user._id;
    console.log('-------Sign Up -------');
    console.log(req.session);
}   