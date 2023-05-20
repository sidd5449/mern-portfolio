import express from 'express';
import { getWorkInfo } from '../controllers/getWorkInfo.js';

const router = express.Router();
router.get('/works', getWorkInfo);

export default router;