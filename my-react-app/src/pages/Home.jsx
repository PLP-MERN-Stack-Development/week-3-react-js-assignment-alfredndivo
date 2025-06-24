// src/pages/Home.jsx
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import TaskManager from '../components/TaskManager';
import UserList from '../api/UserList';

const Home = () => {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Counter Section */}
      <div className="flex items-center gap-4 my-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>

      {/* Theme Toggle */}
      <div className="mb-6">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      {/* Task Manager */}
      <TaskManager />

      {/* API Data */}
      <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">🌍 User Directory</h2>
        <UserList />
      </div>
    </>
  );
};

export default Home;

