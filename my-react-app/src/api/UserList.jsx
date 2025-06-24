import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch(`https://randomuser.me/api/?results=8&page=${page}`);
    const data = await res.json();
    setUsers(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const filtered = users.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search users by name"
          className="border px-4 py-2 rounded w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((user, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 shadow rounded p-4 text-center">
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="w-20 h-20 mx-auto rounded-full mb-2"
              />
              <h3 className="font-semibold">{`${user.name.first} ${user.name.last}`}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400">{user.location.country}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
