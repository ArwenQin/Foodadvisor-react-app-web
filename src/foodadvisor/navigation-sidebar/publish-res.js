import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addNewRestaurantThunk,findResByNameThunk } from "../services/restaurant-thunks";

const PublishRes = () => {
    const [restaurantInfo, setRestaurantInfo] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.user.currentUser);

    if (!currentUser) {
        navigate("/foodadvisor/login");
        return null;
    }

    const handlePublishRestaurant = async () => {

        if(!restaurantInfo||!restaurantInfo.name){
            alert('Please enter a restaurant name')
            return null;
        }
        restaurantInfo.owner=currentUser.username;
        const checkOwner=await dispatch(findResByNameThunk(restaurantInfo.name));
        const checkOwnerInfo=checkOwner.payload;

        if(!checkOwnerInfo){

            try{
                await dispatch(addNewRestaurantThunk(restaurantInfo));}
            catch(e){
                alert(e);
            }
            alert('New Restaurant Successfully Published!')
        }

        else{
        const checkOwnerName=checkOwnerInfo.owner;

        if(checkOwnerName&&(checkOwnerName!==restaurantInfo.owner)){
            alert('You are not the owner of this restaurant')
            return null;
        }

        try{
        await dispatch(addNewRestaurantThunk(restaurantInfo));}
        catch(e){
            alert(e);
        }
        alert('Information Successfully Updated!')
    }};

    return (
        <div className="container mt-4">
            <h2>Add New Restaurant</h2>

            {currentUser.type === "owner" && (
                <div>
                    <div className="mt-2">
                        <label>Restaurant Name</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.name}
                            placeholder="Restaurant Name"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, name: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Restaurant Address</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.address}
                            placeholder="Address"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, address: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Cuisine</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.cuisine}
                            placeholder="Cuisine"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, cuisine: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Restaurant Logo</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.image}
                            placeholder="Image URL"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, image: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Upload Image One</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.image1}
                            placeholder="Image1 URL"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, image1: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Upload Image Two</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.image2}
                            placeholder="Image2 URL"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, image2: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Upload Image Three</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.image3}
                            placeholder="Image3 URL"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, image3: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Upload A Banner</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.imageBanner}
                            placeholder="Banner Image URL"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, imageBanner: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Tel Number</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.tel}
                            placeholder="Tel"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, tel: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Open Hour</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.hour}
                            placeholder="9am - 9 pm, Mon - Sun"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, hour: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            value={restaurantInfo.description}
                            placeholder="Description"
                            onChange={(e) =>
                                setRestaurantInfo({ ...restaurantInfo, description: e.target.value })
                            }
                        ></textarea>
                    </div>

                    <div className="mt-2">
                        <label>Details</label>
                        <textarea
                            className="form-control"
                            value={restaurantInfo.details}
                            placeholder="Details"
                            onChange={(e) =>
                                setRestaurantInfo({ ...restaurantInfo, details: e.target.value })
                            }
                        ></textarea>
                    </div>

                    <div className="mt-2">
                        <label>Menu One</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.menu1}
                            placeholder="Menu One"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, menu1: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Menu Two</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.menu2}
                            placeholder="Menu Two"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, menu2: e.target.value })}
                        />
                    </div>

                    <div className="mt-2">
                        <label>Menu Three</label>
                        <input
                            className="form-control"
                            type="text"
                            value={restaurantInfo.menu3}
                            placeholder="Menu Three"
                            onChange={(e) => setRestaurantInfo({ ...restaurantInfo, menu3: e.target.value })}
                        />
                    </div>

                    <div className="mt-3">
                        <button 
                            className="btn rounded-pill" 
                            style={{ backgroundColor: 'orange', color: 'white', fontWeight: 'bold' }}
                            onClick={handlePublishRestaurant}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PublishRes;
