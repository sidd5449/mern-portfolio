import express from 'express';
import { getClientInfo } from '../controllers/getClientInfo.js';

const router = express.Router();
router.get('/clients', getClientInfo);

export default router;