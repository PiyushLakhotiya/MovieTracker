import bcrypt from 'bcrypt';
import User from '../Models/User.js';

export const login = async (req, res) => {
    const {email, password} = req.body;
    const data = await User.findOne({email: email});
    const isValid = await bcrypt.compare(password, data.password);
    if(isValid) {
        req.session.user_id = data._id;
    }
    console.log('----------Log In ------------')
    console.log(req.session);
}
