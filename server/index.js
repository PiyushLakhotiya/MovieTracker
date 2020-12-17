import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import postRoutes from './Routes/post.js';
import categoryRoutes from './Routes/category.js';
import typesRoutes from './Routes/types.js';
import signUpRoutes from './Routes/signup.js';
import loginRoutes from './Routes/login.js';

const app = express();
const password = 'movietracker123';
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());
app.use(session(
    {
        secret: 'Dont know what to do',
        resave: false,
        saveUninitialized: true
    }));

const isLoggedIn = (req, res, next) => {
    console.log('-------------- Is Logged In -------------')
    console.log(req.session.user_id);
    if(!req.session.user_id) {
        return res.status(200).json({message: 'Username or Password is incorret'});
    }
    next();
}
app.use('', signUpRoutes);
app.use('', loginRoutes);
app.use('/post',isLoggedIn, postRoutes);
app.use('/category',isLoggedIn, categoryRoutes);
app.use('',isLoggedIn, typesRoutes);

const CONNECTION_URL = `mongodb+srv://MovieTracker:${password}@cluster0.a4ov7.mongodb.net/Tracker?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)))
    .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);

