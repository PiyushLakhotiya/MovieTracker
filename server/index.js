import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`)))
    .catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
    res.send(`Start`);
});