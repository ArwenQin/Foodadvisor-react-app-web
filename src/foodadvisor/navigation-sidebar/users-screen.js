import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SiFoodpanda } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { GiCoolSpices } from "react-icons/gi";
import { fetchUserRatingsThunk } from "../services/tuits-thunks";

function UsersScreen() {
  const dispatch = useDispatch();
  const visitingUser = useSelector((state) => state.user.visitingUser);
  const userTuits = useSelector((state) => state.tuits.userTuits) || [];
  const [isLoading, setIsLoading] = useState(false);
  const renderStars = (rating) => {
    if (Number.isInteger(rating) && rating > 0 && rating <= 5) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }
    return 'Invalid rating';
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(fetchUserRatingsThunk(visitingUser._id));
      setIsLoading(false);
    };

    if (visitingUser) {
      fetchData();
    }
  }, [visitingUser, dispatch]);
  console.log('rates', userTuits);

  return (
    <div>
      <h1>User Details</h1>
      {visitingUser === null ? (
        <div>
          <h2>
            Select a user to see more details about them&nbsp;
            <SiFoodpanda />
          </h2>
        </div>
      ) : (
        <div>
          <div>
            <img
              src={visitingUser.image}
              width={70}
              className="rounded-3"
            />
          </div>
          <div>
            Hi Pandas, this is &nbsp;
            <span style={{ fontWeight: "bold", color: "orange" }}>
              {visitingUser.username}
            </span>
            &nbsp;<SiFoodpanda />
          </div>
          <div>
            <BsStars color="yellow" />
            &nbsp;{visitingUser.intro}
          </div>
          <p></p>
          <div>
            <h4>
              <GiCoolSpices color="yellow" /> Something Cool About This Panda
            </h4>
            <p>{visitingUser.details}</p>
          </div>

          <div>
            <h3>User's Ratings</h3>
            {userTuits && userTuits.map((tuit) => (
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
        </div>
      )}
    </div>
  );

}

export default UsersScreen;
