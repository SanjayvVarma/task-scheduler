import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTaskForm from './pages/addTaskForm/AddTaskForm';
import TaskList from './pages/taskList/TaskList';
import TaskLogs from './pages/taskLogs/TaskLogs';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<AddTaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/logs" element={<TaskLogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
