import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';









const CollegeCard = ({ college }) => {
  
  
    return (
        <> 
 
 <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white transition transform hover:scale-105">
      <img className="w-full h-40 object-cover" src={college.college_image} alt={college.college_name} />
      <div className="px-6 py-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{college.college_name}</h3>
        <p className="text-gray-600 mb-2">Admission Date: {college.admission_date}</p>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Events:</h4>
          <ul className="list-disc list-inside pl-4 text-gray-600">
            {college.details.events.map((event) => (
              <li key={event.event_name}>
                <strong>{event.event_name}</strong> - {event.event_date} ({event.event_description})
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Research History:</h4>
          <p className="text-gray-600">{college.research_count} research projects</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">Sports Facilities:</h4>
          <ul className="list-disc list-inside pl-4 text-gray-600">
            {college.details.sports_facilities.map((facility) => (
              <li key={facility}>{facility}</li>
            ))}
          </ul>
        </div>

        <Link to={`/collage/${college._id}`}>
          <button className="bg-blue-500 text-white w-full px-4 my-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Details
          </button>
        </Link>
      </div>
    </div>
      
    

        </>
    );
  };









const CollageSection = () => {

    const [Colleges, setColleges] = useState([]);

    useEffect(() => {
      const fetchColleges = async () => {
        try {
          const response = await axios.get('http://localhost:5000/collages');
          setColleges(response?.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchColleges();
    }, []);
    return (
        <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Colleges</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {Colleges.slice(0, 3).map(college => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      </div>
    );
};

export default CollageSection;