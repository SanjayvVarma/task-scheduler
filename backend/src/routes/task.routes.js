import { Router } from 'express';
import { createTask, getTasks } from '../controllers/task.controller.js';

const router = Router();

router.post('/create-tasks', createTask);
router.get('/get-tasks', getTasks);

export default router;
