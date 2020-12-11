import PostMessage from '../Models/postMessage.js';
import Category from '../Models/Category.js';

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);
    // try {
       
       const id = req.body.title_id;
       await PostMessage.find({title_id: id})
                .then(data => {
                    if(data.length === 0) {
                        newPost.save();
                    } else {
                        return res.status(201).json({message: 'Already Saved'});
                    }
                })
                .catch(error => {
                        return res.status(404).json({message: error.message});
                });
        await Category.find()
            .then(data => {
                let type = req.body.category;
                let isTypePresent = data.findIndex(type);
                if(isTypePresent === -1) {
                    let newData = [...data];
                    newData.push(type);
                    Category.updateOne({category: data}, {category: newData});
                }
            })
            .catch(error => {
                return res.status(404).json({message: error.message});
            })
        res.status(201).json(newPost);
}