import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskScheduler = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', schedule: '', disabled: false });

  const fetchTasks = async () => {
    const response = await axios.get('https://task-scheduler-k1qv.onrender.com/api/v1/task/get-tasks');
    console.log(response);
    
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    await axios.post('https://task-scheduler-k1qv.onrender.com/api/v1/task/create-tasks', newTask);
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Scheduler</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
        <input
          type="text"
          placeholder="Name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Schedule"
          value={newTask.schedule}
          onChange={(e) => setNewTask({ ...newTask, schedule: e.target.value })}
        />
        <input
          type="checkbox"
          checked={newTask.disabled}
          onChange={(e) => setNewTask({ ...newTask, disabled: e.target.checked })}
        />
        <button type="submit">Add Task</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Schedule</th>
            <th>Success Count</th>
            <th>Error Count</th>
            <th>Last Success</th>
            <th>Last Error</th>
            <th>Disabled</th>
            <th>Retries</th>
            <th>Status</th>
            <th>Next To-Do Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>{task.schedule}</td>
              <td>{task.successCount}</td>
              <td>{task.errorCount}</td>
              <td>{task.lastSuccess ? new Date(task.lastSuccess).toLocaleString() : '-'}</td>
              <td>{task.lastError ? new Date(task.lastError).toLocaleString() : '-'}</td>
              <td>{task.disabled ? 'Yes' : 'No'}</td>
              <td>{task.retries}</td>
              <td>{task.status}</td>
              <td>{task.nextToDoTask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskScheduler;
