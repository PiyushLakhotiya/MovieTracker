import express from 'express';
import { createPost } from '../Controllers/post.js';

const router = express.Router();

router.get('/',() => console.log('d')); 
router.post('', createPost);

export default router;