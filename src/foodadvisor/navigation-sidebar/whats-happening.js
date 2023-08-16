import React, { useState } from "react";
import { createTuitThunk, searchTuitsThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const results = await dispatch(searchTuitsThunk(searchTerm));
      setSearchResults(results.payload);
    } catch (error) {
      console.error("Failed to fetch search results: ", error.message);
    }
  };

  const rateClickHandler = (restaurant) => {
    if (!restaurant.name) {
      alert("Please select a valid restaurant from the search results before rating.");
      return;
    }

    const ratingData = whatsHappening[restaurant._id] || {};
    const newRating = {
      name: restaurant.name,
      rating: ratingData.rating,
      comment: ratingData.comment,
      restaurantType: restaurant.restaurantType
    }
    dispatch(createTuitThunk(newRating));

    // Clear the respective rating and comment
    setWhatsHappening(prev => {
      const updatedState = { ...prev };
      delete updatedState[restaurant._id];
      return updatedState;
    });
  }

  return (
    <div className="row">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a restaurant"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchTerm && !searchResults.length ? (
          <li>No restaurants found</li>
        ) : (
          searchResults.map(restaurant => (
            <li key={restaurant._id}>
              {restaurant.name} ({restaurant.restaurantType})

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
            </li>
          ))
        )}
      </ul>

      <div className="col-12"><hr /></div>
    </div>
  );
}

export default WhatsHappening;
