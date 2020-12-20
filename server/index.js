import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './Routes/post.js';
import categoryRoutes from './Routes/category.js';
import typesRoutes from './Routes/types.js';
import signUpRoutes from './Routes/signup.js';
import loginRoutes from './Routes/login.js';
import auth from './auth.js';
const app = express();
const password = 'movietracker123';

const CONNECTION_URL = `mongodb+srv://MovieTracker:${password}@cluster0.a4ov7.mongodb.net/Tracker?retryWrites=true&w=majority`;
// app.use(expressSession({
//     secret: "Another Secret Page",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());



app.use('', signUpRoutes);
app.use('', loginRoutes);
app.use('/post',auth, postRoutes);
app.use('/category',auth, categoryRoutes);
app.use('',auth, typesRoutes);

const CONNECTION_URL = `mongodb+srv://MovieTracker:${password}@cluster0.a4ov7.mongodb.net/Tracker?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)))
    .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);

