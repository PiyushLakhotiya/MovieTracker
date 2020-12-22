import PostMessage from '../Models/postMessage.js';
// {author: {id: req.user.id}}
export const allData = (req, res) => {
    PostMessage.find({authorId: req.user.id})
        .then(data => {
            console.log('then');
            res.status(200).json(data);
        })
        .catch(error => {
            console.log('catch');
            res.status(404).json({message: error.message});
        })
}

export const allMovies = (req, res, category) => {
    PostMessage.find({type: category, authorId: req.user.id})
        .then((data) => {
            res.status(200).json(data);
        }) 
        .catch(error => {
            res.status(404).json({message: error.message});
        })
}

