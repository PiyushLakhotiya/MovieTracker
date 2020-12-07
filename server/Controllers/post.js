import PostMessage from '../Models/postMessage.js';

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);
    console.log(req);
    try {
       await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}