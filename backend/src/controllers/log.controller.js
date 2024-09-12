import Log from "../models/log.model.js";

const getAllLogs = async (req, res) => {
    try {
        const logs = await Log.find().populate('taskId');
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    getAllLogs,
};
