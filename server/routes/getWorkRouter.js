import express from 'express';
import { getWorkInfo } from '../controllers/getWorkInfo.js';

const router = express.Router();
router.get('/',getWorkInfo);

export default router;