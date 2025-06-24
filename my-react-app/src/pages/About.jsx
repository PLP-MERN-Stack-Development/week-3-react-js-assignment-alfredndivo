import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-4">About This App</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        The <strong>PLP Task Manager</strong> is a simple React app designed to help users manage their daily tasks efficiently.
        It includes features like:
      </p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
        <li>Add, complete, and delete tasks</li>
        <li>Filter tasks by status</li>
        <li>Switch between light and dark mode</li>
        <li>Persistent storage using localStorage</li>
        <li>Sample API data fetch using React hooks</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300">
        Built with ❤️ using React, Tailwind CSS, and Vite under the Power Learn Project (PLP).
      </p>
    </div>
  );
};

export default About;
