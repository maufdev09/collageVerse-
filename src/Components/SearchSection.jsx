import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  console.log(collegeResults);

  return (
    <div className="p-4 w-full mx-auto">
      <div className="w-[50%] mx-auto flex mb-4">
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        {collegeResults.map((college) => (
            <div
            key={college._id}
            className="bg-white p-4 border rounded-md shadow-md mb-4"
            >
              <> 
      <div className="bg-white p-4 rounded shadow">
        <img src={college?.college_image} alt={college?.college_name} className="w-full h-40 object-cover mb-4" />
        <h2 className="text-xl font-bold mb-2">{college?.college_name}</h2>
        <p className="text-gray-600 mb-2">Rating: {college?.college_rating}</p>
        <p className="text-gray-600 mb-2">Admission Date: {college?.admission_date}</p>
        <p className="text-gray-600 mb-4">Research Count: {college?.research_count}</p>
       <Link to={`/collage/${college._id}`} ><button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
          Details
        </button></Link>
      </div>

        </>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
