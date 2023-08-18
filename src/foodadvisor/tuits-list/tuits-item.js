import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { BsFillPatchCheckFill, BsDot } from 'react-icons/bs';
import { deleteTuitThunk } from "../services/tuits-thunks";
import { RxCross1 } from "react-icons/rx";

const RatingItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const name = currentUser?.username || "Unknown User";

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
            <b>{tuit.username}</b> <BsFillPatchCheckFill size={16} color="blue" /> {tuit.handle}<BsDot size={12} />{tuit.time}
            <span className="wd-delete-icon">
              <RxCross1 size={14} onClick={() => deleteTuitHandler(tuit._id)} />
            </span>
          </div>
          <div>Rating: {Number.isInteger(tuit.rating) ? '★'.repeat(tuit.rating) : 'Invalid rating'}</div>
          <div>Comment: {tuit.comment}</div>
          <div>Restaurant: {tuit.name}</div>
          <div>Type: {tuit.restaurantType}</div>
          <div>Name: {name}</div>
          <div><TuitStats tuit={tuit} /></div>
        </div>
      </div>
    </li>
  );
};

export default RatingItem;
