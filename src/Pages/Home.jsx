import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Search from "../Components/SearchSection";
import CollageSection from "../Components/CollageSection";
import CollegeImageGallery from "../Components/CollegeImageGallery";
import ResearchPapersSection from "../Components/ResearchPapersSection";
import ReviewSection from "../Components/ReviewSection";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Search></Search>
      <CollageSection></CollageSection>
      <div className="w-[70%] mx-auto">
        <CollegeImageGallery></CollegeImageGallery>
      </div>
      <ResearchPapersSection></ResearchPapersSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
