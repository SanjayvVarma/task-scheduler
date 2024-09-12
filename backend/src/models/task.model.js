import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        recipientEmail: {
            type: String,
            required: true
        },

        schedule: {
            type: String,
            required: true
        },

        successCount: {
            type: Number,
            default: 0
        },

        errorCount: {
            type: Number,
            default: 0
        },

        lastSuccess: {
            type: Date,
            default: null
        },

        lastError: {
            type: Date,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        },

        retries: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            default: 'pending'
        },

        nextToDoTask: {
            type: String,
            default: ''
        },
    }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
