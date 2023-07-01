import express from 'express';
import { getClientInfo } from '../controllers/getClientInfo.js';

const router = express.Router();
router.get('/', getClientInfo);

export default router;