import Log from "../models/log.model.js";

const createLog = async (taskId, status, message) => {
    try {
        const log = new Log({ taskId, status, message });
        await log.save();
    } catch (error) {
        console.error('Error creating log:', error);
    }
};

export default createLog;