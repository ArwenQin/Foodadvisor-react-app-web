import React, { useState } from "react";
import { useNavigate } from "react-router";
import ResSummaryList from "../all-res-summary-list";
import FiveStarList from "../all-res-summary-list/five-star-list";
import { BsStars } from "react-icons/bs";
import { MdDinnerDining } from "react-icons/md";
import RestaurantSearch from "./res-search";

function ExploreScreen() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleRestaurantSelect = (restaurant) => {
    navigate(`/foodadvisor/more`);
  };

  return (
    <>
      <div className="position-relative mb-2">
        <img
          src="https://egluu.com/wp-content/uploads/2014/02/tripadvisor.jpg"
          className="w-100 "
        />
        <h1 className="position-absolute wd-nudge-up text-white">
          Explore All Restaurants & More!
        </h1>
      </div>
<div>
      <RestaurantSearch
        onRestaurantSelect={handleRestaurantSelect}
      />
</div>

<p></p>
      <h3 style={{color:'orange'}}>
        Check Out Our Five Start Restaurants 
        <BsStars/><BsStars/><BsStars/><BsStars/><BsStars/>
      </h3>
      <FiveStarList />

      <h3 style={{color:'orange'}}>
        Check Out All Amazing Restaurants <MdDinnerDining/>
      </h3>
      <ResSummaryList />
    </>
  );
}

export default ExploreScreen;
