import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findResByNameThunk } from "../services/restaurant-thunks";
import { FaSearch } from "react-icons/fa";

const RestaurantSearch = ({ onSearchResults, onRestaurantSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    const handleSearch = async () => {
        try {
            const result = await dispatch(findResByNameThunk(searchTerm));
            if (result.payload) {
                setSearchResults([result.payload]);
            } else {
                setSearchResults([]);
            }
            onSearchResults(searchResults);
        } catch (error) {
            console.error("Failed to fetch search results: ", error.message);
        }
    };

    return (
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
            <ul className="restaurant-list">
                {searchResults.map(restaurant => (
                    <li
                        key={restaurant._id}
                        onClick={() => onRestaurantSelect(restaurant)}
                        style={{ cursor: "pointer" }}
                    >
                        {restaurant.name} ({restaurant.cuisine})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantSearch;
