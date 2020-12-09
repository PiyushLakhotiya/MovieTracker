import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './Routes/post.js';
import categoryRoutes from './Routes/category.js';
import typesRoutes from './Routes/types.js';

const app = express();

app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());

app.use('/post', postRoutes);
app.use('/category', categoryRoutes);
app.use('', typesRoutes);
const CONNECTION_URL = 'mongodb://localhost:27017/movie_info';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)))
    .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);

