import React, { useState } from "react";
import { rateRestaurantThunk, searchTuitsThunk } from "../services/tuits-thunks";
import { findResByNameThunk } from "../services/restaurant-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    navigate("/tuiter/login");
    return null;
  }

  const handleSearch = async () => {
    try {
      const result = await dispatch(findResByNameThunk(searchTerm));
      if (result.payload) {
        setSearchResults([result.payload]);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Failed to fetch search results: ", error.message);
    }
  };
  

  const rateClickHandler = async (restaurant) => {
    if (!restaurant.name) {
      alert("Please select a valid restaurant from the search results before rating.");
      return;
    }
  
    const ratingData = whatsHappening[restaurant._id] || {};
    const newRating = {
      userId: currentUser._id,
      restaurantId: restaurant._id,
      name: restaurant.name,
      rating: ratingData.rating,
      comment: ratingData.comment,
      restaurantType: restaurant.restaurantType
    }
  
    const response = await dispatch(rateRestaurantThunk(newRating));
  /*
    if (response && response.type === 'YOUR_SUCCESS_ACTION_TYPE') {
      setWhatsHappening(prev => {
        const updatedState = { ...prev };
        delete updatedState[restaurant._id];
        return updatedState;
      });
    } else {
      alert('Failed to rate the restaurant. Please try again.');
    }*/
  }
  

  return (
    <div className="row whatsHappening-container">
    <div className="search-section" style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a restaurant"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px' }} 
      />
      <button 
        style={{
            backgroundColor: "#FFA500",  
            borderRadius: "20px",        
            padding: "5px 15px",         
            border: "none",              
            display: "flex",             
            alignItems: "center",        
            cursor: "pointer"            
        }}
        onClick={handleSearch}
      >
        <FaSearch style={{ marginRight: "5px" }} /> Search
      </button>
    </div>

      <ul className="restaurant-list">
        {searchTerm && !searchResults.length ? (
          <li>No restaurants found</li>
        ) : (
          searchResults.map(restaurant => (
            <li key={restaurant._id}>
              {restaurant.name} ({restaurant.cuisine})

              {currentUser.type === "customer" && (
                <div>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={whatsHappening[restaurant._id]?.rating || ''}
                    placeholder="Rating (1-5)"
                    className="form-control border-0 mt-2"
                    onChange={(event) => setWhatsHappening({
                      ...whatsHappening,
                      [restaurant._id]: {
                        ...whatsHappening[restaurant._id],
                        rating: event.target.value
                      }
                    })}
                  />
                  <textarea
                    value={whatsHappening[restaurant._id]?.comment || ''}
                    placeholder="Comment"
                    className="form-control border-0 mt-2"
                    onChange={(event) => setWhatsHappening({
                      ...whatsHappening,
                      [restaurant._id]: {
                        ...whatsHappening[restaurant._id],
                        comment: event.target.value
                      }
                    })}>
                  </textarea>
                  <button onClick={() => rateClickHandler(restaurant)}>
                    Rate
                  </button>
                </div>
              )}
            </li>
          ))
        )}
      </ul>

      <div className="col-12"><hr /></div>
    </div>
  );

}

export default WhatsHappening;
