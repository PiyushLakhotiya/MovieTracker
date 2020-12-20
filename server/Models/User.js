import mongoose from 'mongoose';
// import { use } from 'passport';
// import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// userSchema.plugin(passportLocalMongoose);
const userModel = mongoose.model('User', userSchema);

export default userModel;
