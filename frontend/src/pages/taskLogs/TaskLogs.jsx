import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('https://task-scheduler-k1qv.onrender.com/api/v1/log/all-logs');
        const logsData = response.data;
        console.log('Fetched logs:', logsData);
        setLogs(logsData);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Logs</h2>
      <h2 className="text-xl font-bold mb-4">count : {logs.length }</h2>
      <ul className="space-y-4">
        {logs.length === 0 ? (
          <p>No logs available</p>
        ) : (
          logs.map(log => (
            <li key={log._id} className="border p-4 rounded-md shadow-sm">
              <p><strong>Execution Time:</strong> {log.executionTime? new Date(log.executionTime).toLocaleString() : 'N/A'}</p>
              <p><strong>Status:</strong> {log.status || 'N/A'}</p>
              <p><strong>Message:</strong> {log.message || 'N/A'}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskLogs;
