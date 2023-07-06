import express from 'express';
import { uploadWorks } from '../controllers/uploadWorks.js';

const router = express.Router();

router.post('/', uploadWorks);

export default router;
