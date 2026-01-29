import React, { useState, useEffect } from 'react';

function UserDataFetcher() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current user index

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all users (API returns 10 users by default)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setUsers(jsonData); // Set array of users
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < users.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : users.length - 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading data pengguna...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-500 p-6 rounded-lg max-w-md mx-auto">
        <p className="text-red-400 text-center font-semibold">❌ Error: {error.message}</p>
      </div>
    );
  }

  // Get current user
  const user = users[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 text-indigo-400">
        📊 User Directory
      </h1>
      <p className="text-center text-gray-400 mb-8">
        User {currentIndex + 1} of {users.length}
      </p>

      {/* Single User Card */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700 mb-6">
        {/* User Header */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mr-5 shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
            <p className="text-md text-gray-400">@{user.username}</p>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <div className="flex items-start border-b border-gray-700 pb-3">
            <span className="text-indigo-400 font-semibold w-28 text-sm">📧 Email:</span>
            <span className="text-gray-300 break-all flex-1">{user.email}</span>
          </div>

          <div className="flex items-start border-b border-gray-700 pb-3">
            <span className="text-indigo-400 font-semibold w-28 text-sm">📞 Phone:</span>
            <span className="text-gray-300 flex-1">{user.phone}</span>
          </div>

          <div className="flex items-start border-b border-gray-700 pb-3">
            <span className="text-indigo-400 font-semibold w-28 text-sm">🌐 Website:</span>
            <span className="text-gray-300 flex-1">{user.website}</span>
          </div>

          <div className="flex items-start border-b border-gray-700 pb-3">
            <span className="text-indigo-400 font-semibold w-28 text-sm">🏢 Company:</span>
            <span className="text-gray-300 flex-1">{user.company.name}</span>
          </div>

          <div className="flex items-start border-b border-gray-700 pb-3">
            <span className="text-indigo-400 font-semibold w-28 text-sm">� Catchphrase:</span>
            <span className="text-gray-300 flex-1 italic">"{user.company.catchPhrase}"</span>
          </div>

          <div className="flex items-start border-b border-gray-700 pb-3">
            <span className="text-indigo-400 font-semibold w-28 text-sm">📍 Address:</span>
            <span className="text-gray-300 flex-1">
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </span>
          </div>
        </div>

        {/* User ID Badge */}
        <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center">
          <span className="text-sm text-gray-500">User ID: #{user.id}</span>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">Active</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={handlePrevious}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <span className="text-xl">←</span>
          <span>Previous</span>
        </button>

        <div className="flex gap-2">
          {users.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-indigo-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
                }`}
              aria-label={`Go to user ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
        >
          <span>Next</span>
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-gray-500 text-sm mt-4">
        💡 Tip: Click on the dots to jump to specific user
      </p>
    </div>
  );
}

export default UserDataFetcher;
