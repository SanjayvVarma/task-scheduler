import Log from "../models/log.model.js";

const getLogsByTaskId = async (req, res) => {
    const { taskId } = req.params
    try {
        const logs = await Log.findById(taskId);
        console.log(taskId);
        
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllLogs = async (req, res) => {
    try {
        const logs = await Log.find().populate('taskId');
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    getLogsByTaskId,
    getAllLogs,
};
