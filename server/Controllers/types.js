import PostMessage from '../Models/postMessage.js';

export const allData = (req, res) => {
    PostMessage.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(error => {
            res.status(404).json({message: error.message});
        })
}

export const allMovies = (req, res, type) => {
    PostMessage.find({type: type})
        .then((data) => {
            res.status(200).json(data);
        }) 
        .catch(error => {
            res.status(404).json({message: error.message});
        })
}

