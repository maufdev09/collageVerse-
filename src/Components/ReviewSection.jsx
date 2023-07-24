import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-reviews');
        setReviews(response?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Feedback and Ratings</h2>
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="flex-shrink-0">
                {/* Assuming you have a user avatar URL in the 'avatar' property */}
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="User Avatar"
                />
              </div>
              <div className="ml-3">
                <div className="text-gray-700 font-semibold">{review.name}</div>
                <div className="text-gray-500 text-sm">Rated {review.rating}/5 stars</div>
              </div>
            </div>
            <div className="text-gray-700">{review.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
