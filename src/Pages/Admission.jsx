import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const CollegeCard = ({ college }) => {
  
  
    return (
        <> 
      <div className="bg-white p-4 rounded shadow">
        <img src={college?.college_image} alt={college?.college_name} className="w-full h-40 object-cover mb-4" />
        <h2 className="text-xl font-bold mb-2">{college?.college_name}</h2>
        <p className="text-gray-600 mb-2">Rating: {college?.college_rating}</p>
        <p className="text-gray-600 mb-2">Admission Date: {college?.admission_date}</p>
        <p className="text-gray-600 mb-4">Research Count: {college?.research_count}</p>
        <Link to={`/admission/${college._id}`} ><button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Apply
        </button></Link>
      </div>

        </>
    );
  };




const Admission = () => {
    const [colleges, setColleges] = useState([]);
console.log(colleges);
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
        <h1 className="text-3xl font-bold mb-4">Admission</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {colleges.map(college => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      </div>
    );
};

export default Admission;