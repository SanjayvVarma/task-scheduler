
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema(
    {
        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            required: true
        },

        executionTime: {
            type: Date,
            default: Date.now
        },

        status: {
            type: String,
            required: true
        },

        message: {
            type: String,
            default: ''
        },
    }
);

const Log = mongoose.model('Log', logSchema);

export default Log;
