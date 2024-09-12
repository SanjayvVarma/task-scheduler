import { Router } from 'express';
import { getAllLogs, getLogsByTaskId } from '../controllers/log.controller.js';

const router = Router();

router.get('/all-logs', getAllLogs);

export default router;
