import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTaskForm from './pages/addTaskForm/AddTaskForm';
import TaskList from './pages/taskList/TaskList';
import TaskLogs from './pages/taskLogs/TaskLogs';

function App() {

  return (
    <Router>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Scheduler</h1>
        <div >
        <Link to="/tasks" className="mx-3 bg-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-800">Add Task</Link>
        <Link to="/logs" className="bg-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-800">Logs</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/tasks" element={<AddTaskForm />} />
          <Route path="/logs" element={<TaskLogs />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
};

export default App;
