import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [collegeResults, setCollegeResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/search?q=${searchQuery}`);
      setCollegeResults(response.data);
    } catch (error) {
      console.error('Error searching colleges:', error);
    }
  };

  return (
    <div className="p-4 w-[50%] mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search for a college..."
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
      <div>
        {collegeResults.map((college) => (
          <div
            key={college._id}
            className="bg-white p-4 border rounded-md shadow-md mb-4"
          >
            <h3 className="text-xl font-bold">{college.name}</h3>
            {/* Display other college details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
