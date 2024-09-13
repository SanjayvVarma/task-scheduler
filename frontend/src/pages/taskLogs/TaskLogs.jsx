import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('https://task-scheduler-k1qv.onrender.com/api/v1/log/all-logs');
        setLogs(response.data);
        console.log(response);
        
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Logs</h2>
      <ul className="space-y-4">
        {logs.map(log => (
          <li key={log._id} className="border p-4 rounded-md shadow-sm">
            <p><strong>Task ID:</strong> {log.taskId}</p>
            <p><strong>Execution Time:</strong> {new Date(log.executionTime).toLocaleString()}</p>
            <p><strong>Status:</strong> {log.status}</p>
            <p><strong>Message:</strong> {log.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskLogs;
