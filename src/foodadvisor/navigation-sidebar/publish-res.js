import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addNewRestaurantThunk } from "../services/restaurant-thunks";

const PublishRes = () => {
    const [restaurantInfo, setRestaurantInfo] = useState({
        name: "",
        address: "",
        cuisine: "",
        description: "",
        image: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.user.currentUser);

    if (!currentUser) {
        navigate("/tuiter/login");
        return null;
    }

    const handlePublishRestaurant = () => {
        dispatch(addNewRestaurantThunk(restaurantInfo));
        setRestaurantInfo({
            name: "",
            address: "",
            cuisine: "",
            description: "",
            image: ""
        });
    };

    return (
        <div className="row">

            {currentUser.type === "owner" && (
                <div>
                    <h4>Add New Restaurant</h4>
                    <input
                        type="text"
                        value={restaurantInfo.name}
                        placeholder="Restaurant Name"
                        onChange={(e) =>
                            setRestaurantInfo({ ...restaurantInfo, name: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={restaurantInfo.address}
                        placeholder="Address"
                        onChange={(e) =>
                            setRestaurantInfo({ ...restaurantInfo, address: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={restaurantInfo.cuisine}
                        placeholder="Cuisine"
                        onChange={(e) =>
                            setRestaurantInfo({ ...restaurantInfo, cuisine: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        value={restaurantInfo.image}
                        placeholder="Image URL"
                        onChange={(e) =>
                            setRestaurantInfo({ ...restaurantInfo, image: e.target.value })
                        }
                    />

                    <textarea
                        value={restaurantInfo.description}
                        placeholder="Description"
                        onChange={(e) =>
                            setRestaurantInfo({
                                ...restaurantInfo,
                                description: e.target.value,
                            })
                        }
                    ></textarea>
                    <button onClick={handlePublishRestaurant}>Publish</button>
                </div>
            )}
        </div>
    );
};

export default PublishRes;
