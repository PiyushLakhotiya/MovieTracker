import Category from '../Models/Category.js';
import PostMessage from '../Models/postMessage.js';

export const showCollection = async (req, res) => {
    await Category.find({})
            .then(data => {
                res.status(200).json(data);
            })    
            .catch(error => {
                res.status(404).json({message: error.message});
            })
}

export const showMovies = async (req, res) => {
    const category = req.params.category;
    await PostMessage.find({type: category})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(error => {
                res.status(404).json({message: error.message});
            })
}

