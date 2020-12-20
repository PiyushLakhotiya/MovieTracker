import express from 'express';
import {signup} from '../Controllers/signup.js';
const router = express.Router();

router.post('/signup',signup)

export default router; 
