import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CollegeImageGallery = () => {
  // Sample data for college graduate group pictures
  const graduateGroupPictures = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      caption: 'College Graduates Group 1',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      caption: 'College Graduates Group 2',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      caption: 'College Graduates Group 3',
    },
    // Add more pictures as needed
  ];

  return (
    <div className="my-8">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Change the interval as per your preference (in milliseconds)
        showStatus={false}
        showArrows={false}
      >
        {graduateGroupPictures.map((picture) => (
          <div key={picture.id} >
            <img src={picture.image}  alt={picture.caption} />
            <p className="legend">{picture.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CollegeImageGallery;
