import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    type:String,
    image: String,
    genre: String,
    status:String,
    date: {
        type: Date,
        default: new Date()
    }
});

const postModel = mongoose.model('PostMessage',postSchema);

export default postModel;