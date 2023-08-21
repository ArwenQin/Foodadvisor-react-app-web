import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTuitsThunk } from "../services/tuits-thunks";
import { FaSearch } from "react-icons/fa";

const TuitSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = useSelector((state) => state.tuits.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedSearchTerm = localStorage.getItem('searchTerm');
    if (persistedSearchTerm) {
      setSearchTerm(persistedSearchTerm);
      dispatch(searchTuitsThunk(persistedSearchTerm));
    }
  }, [dispatch]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      alert("Please enter a tuit to search for!");
      return;
    }
    localStorage.setItem('searchTerm', searchTerm);
    dispatch(searchTuitsThunk(searchTerm));
  };
  const renderStars = (rating) => {
    if (Number.isInteger(rating) && rating > 0 && rating <= 5) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }
    return 'Invalid rating';
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          placeholder="Search for a tuit"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button className="btn  mt-2" style={{ backgroundColor: "orange", color: "white"}} onClick={handleSearch}>
          <FaSearch /> Search
        </button>
      </div>
      {searchResults.length > 0 ? (
        <div>
          <h3>Search Results</h3>
          {searchResults.map((tuit) => (
            <div key={tuit._id} style={{
              border: '2px solid orange',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#FFF3E0' // This is a light orange background
            }}>
              <h4>{tuit.name}</h4>
              <p>Rating: {renderStars(tuit.rating)}</p>
              <p>Comment: {tuit.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2>No results found. Please search for a comment.</h2>
      )}
    </div>
  );
}
export default TuitSearch;
