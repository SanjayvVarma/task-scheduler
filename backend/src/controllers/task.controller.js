import Task from '../models/task.model.js';
import createLog from '../utils/logService.js';
import sendEmail from '../utils/emailService.js';

const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const handleScheduledTasks = async () => {
    try {
        const tasks = await Task.find({ disabled: false });
        for (const task of tasks) {
            if (!task.recipientEmail) {
                throw new Error('Recipient email is missing for task');
            }
            await sendEmail(task.recipientEmail, 'Scheduled Task', `Task: ${task.name}`);
            await createLog(task._id, 'success', 'Email sent successfully');
        }
    } catch (error) {
        console.error('Error in scheduled task', error);
        await createLog('some-task-id', 'error', error.message);
    }
};

export {
    createTask,
    getTasks,
    handleScheduledTasks,
};
