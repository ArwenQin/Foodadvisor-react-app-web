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
    navigate(`/tuiter/more`);
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

      <RestaurantSearch 
        onSearchResults={handleSearchResults} 
        onRestaurantSelect={handleRestaurantSelect}
      />

      {searchResults.length > 0 && (
        <ul className="restaurant-list">
          {searchResults.map(restaurant => (
            <li key={restaurant._id}>
              {restaurant.name} ({restaurant.cuisine})
            </li>
          ))}
        </ul>
      )}

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
