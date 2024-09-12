import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://task-scheduler-k1qv.onrender.com/api/v1/task/get-tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task._id} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <p><strong>Email:</strong> {task.recipientEmail}</p>
            <p><strong>Schedule:</strong> {task.schedule}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;