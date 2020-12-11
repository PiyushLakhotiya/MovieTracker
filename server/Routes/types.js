import express from 'express';
import { allData, allMovies } from '../Controllers/types.js';

const router = express.Router();

router.get('/', allData);
router.get('/movies',(req, res) => allMovies(req, res, 'Movies'));
router.get('/tvshows', (req, res) => allMovies(req, res, 'TV Shows'));
router.get('/anime', (req, res) => allMovies(req, res, 'Anime'));

export default router;