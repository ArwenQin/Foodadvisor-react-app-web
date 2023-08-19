import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { BsFillPatchCheckFill, BsDot } from 'react-icons/bs';
import { deleteTuitThunk } from "../services/tuits-thunks";
import { RxCross1 } from "react-icons/rx";
import {PiBowlFoodDuotone} from "react-icons/pi";
import {findResByNameThunk} from "../services/restaurant-thunks";
import {useNavigate} from "react-router";
import {findUserByIdThunk} from "../services/auth-thunks";
const RatingItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const name = currentUser?.username || "Unknown User";
  const handleExploreClick = async () => {

    await dispatch(findUserByIdThunk(tuit.userId));

    navigate('/tuiter/users');
  };
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 d-none d-xl-block">
          <img height={70} className="rounded-circle wd-image" src={`${tuit.image}`} />
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-12">
          <div>
            <b>{tuit.name}</b> <PiBowlFoodDuotone size={16} color="orange" /> {tuit.handle}<BsDot size={12} />{tuit.restaurantType}
            <span className="wd-delete-icon">
              {currentUser  && currentUser.type === 'admin' && <RxCross1 size={14} onClick={() => deleteTuitHandler(tuit._id)} />}
            </span>
          </div>
          <div>Rating: {Number.isInteger(tuit.rating) ? '★'.repeat(tuit.rating) : 'Invalid rating'}</div>
          <div>Comment: {tuit.comment}</div>
          <div>Restaurant: {tuit.name}</div>

          <div>User Name: <span onClick={handleExploreClick} style={{  textDecoration: 'underline' }}>{tuit.username}</span></div>
          <div><TuitStats tuit={tuit} /></div>
        </div>
      </div>
    </li>
  );
};

export default RatingItem;
