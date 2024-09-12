import cors from 'cors';
import cron from 'node-cron'
import express from "express";
import { config } from "dotenv";
import taskRouter from './routes/task.routes.js'
import logRouter from './routes/log.routes.js'
import { handleScheduledTasks } from './controllers/task.controller.js';

const app = express();

config({ path: './.env' })

app.use(express.json())

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

app.use(cors({
    origin: '*',
    credentials: true
}))

cron.schedule('* * * *  *', async () => {
    console.log('Running scheduled tasks every minute');
    await handleScheduledTasks();
});

app.use("/api/v1/task", taskRouter)
app.use("/api/v1/log", logRouter)

app.use("/", (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'HELLO WORLD'
    });
});


export default app