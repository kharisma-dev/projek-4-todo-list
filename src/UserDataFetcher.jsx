import React, { useState, useEffect } from 'react';

function UserDataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading data pengguna...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-400">User Data</h2>
      <p><span className="font-bold">Name:</span> {data.name}</p>
      <p><span className="font-bold">Email:</span> {data.email}</p>
      <p><span className="font-bold">Phone:</span> {data.phone}</p>
      <p><span className="font-bold">Website:</span> {data.website}</p>
    </div>
  );
}

export default UserDataFetcher;
