import React, { useState } from "react";
import TuitSearch from "./tuit-search";

function SearchScreen() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const renderStars = (rating) => {
    if (Number.isInteger(rating) && rating > 0 && rating <= 5) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }
    return 'Invalid rating';
  };

  return (
    <div>
      <h1>Tuit Search</h1>
      <TuitSearch onSearchResults={handleSearchResults} />
      
      {searchResults.length === 0 ? (
        <div>
        </div>
      ) : (
        <div>
          <h3>Search Results</h3>
          {searchResults.map((tuit) => (
            <div key={tuit._id} style={{
              border: '2px solid orange',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#FFF3E0'
            }}>
              <h4>{tuit.name}</h4>
              <p>Rating: {renderStars(tuit.rating)}</p>
              <p>Comment: {tuit.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchScreen;
