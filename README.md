# Task Scheduler

## Description

The Task Scheduler is a full-stack application that allows you to manage and schedule tasks. It includes a backend built with Node.js and a frontend built with React. The backend utilizes `node-cron` for scheduling tasks, `Nodemailer` for sending emails, and MongoDB for storing task and log data. The frontend provides an interface for adding tasks, viewing scheduled tasks, and checking the history of task executions.

## Features

- **Task Management**: Create, view, and manage scheduled tasks.
- **Email Notifications**: Send emails as part of scheduled tasks.
- **Task Logs**: Track the history of task executions, including success and failure logs.
- **CRUD Operations**: Perform create, read operations on tasks and logs.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or a MongoDB cloud service
- `.env` file with appropriate environment variables

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SanjayvVarma/task-scheduler.git
    cd task-scheduler
    ```

2. **Install dependencies:**

    ```bash
    cd backend
    npm install
    ```

3. **Create a `.env` file** in the root directory with the following content:

    ```plaintext
    PORT=3001
    MONGO_URI=mongodb://localhost:27017/task_scheduler
    EMAIL_USER=your-email@example.com
    EMAIL_PASS=your-email-password
    ```

4. **Start the server:**

    ```bash
    npm run dev
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the React app:**

    ```bash
    npm run dev
    ```

### Usage

1. **Adding a New Task:**

    Use the form in the React frontend to add a new task by providing the task name and schedule.

2. **Viewing Scheduled Tasks:**

    The main page will display a table of all scheduled tasks, including their status and execution history.

3. **Viewing Task Logs:**

    Logs of task executions are available through the API at `/api/v1/log/logs/tasks/:taskId`. The frontend will display these logs in the task details view.

### API Documentation

 [base_url](https://task-scheduler-k1qv.onrender.com)

- **POST api/v1/task/create-tasks**: Create a new task.
  - Request body: `{ name: string, schedule: string, disabled: boolean }`
  - Response: Created task object.

- **GET /api/v1/task/get-tasks**: Retrieve all tasks.
  - Response: Array of task objects.

- **GET /api/v1/log/logs/tasks/:taskId**: Retrieve logs for a specific task.
  - Response: Array of log objects.

### Live Link

[Link to live site](https://task-scheduler-k1qv.onrender.com)

### Repository

[GitHub Repository](https://github.com/SanjayvVarma/task-scheduler)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Node-cron](https://www.npmjs.com/package/node-cron)
- [Nodemailer](https://nodemailer.com/)
- [MongoDB](https://www.mongodb.com/)
