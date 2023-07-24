import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Collage = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/collage/${id}`);
        setCollege(response?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColleges();
  }, [id]);

  return (
    <div>
      {college && (
        <div>
          {/* Image Section */}
          <div className="relative h-[80vh]">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url(${college.college_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(70%)', // Apply some darkness to the image
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white">{college.college_name}</h3>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <h4 className="text-2xl font-bold mb-4">Details</h4>
            <h2 className="text-3xl font-bold mb-6">{college.college_name}</h2>
            <p className="text-lg mb-4">Rating: {college.college_rating}</p>
            <p className="text-lg mb-4">Admission Date: {college.admission_date}</p>
            <p className="text-lg mb-6">Research Count: {college.research_count}</p>

            <h3 className="text-2xl font-bold mb-4">Events:</h3>
            <ul className="list-disc list-inside text-lg mb-6">
              {college.details.events.map((event) => (
                <li key={event.event_id}>
                  <strong>{event.event_name}</strong> - {event.event_date} ({event.event_description})
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mb-4">Sports Facilities:</h3>
            <ul className="list-disc list-inside text-lg">
              {college.details.sports_facilities.map((facility) => (
                <li key={facility}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collage;
