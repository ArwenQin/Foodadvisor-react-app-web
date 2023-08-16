import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import "./index.css";
import { BsFillPatchCheckFill, BsDot } from 'react-icons/bs';
import { deleteTuitThunk } from "../services/tuits-thunks";

import { RxCross1 } from "react-icons/rx";


const RatingItem = (

  { tuit = {
    "_id": 123, "topic": "Space", "username": "SpaceX",
    "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h", "image": "https://oceansquare.com/wp-content/uploads/2018/04/tesla-logo-500.jpg",

    "liked": true,
    "replies": 321,
    "retuits": 543,
    "likes": 22385,
    "handle": "@spacex",
    "tuit": "This morning at 12:34 EST Earth time, a convoy of Tesla CyberTrucks drove across the Martian landscape after picking up the Curiosity, Sojourner, Spirit, and Perserance on their 6' beds"

  } }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));

  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 d-none d-xl-block">
          <img height={70} className="rounded-circle wd-image" src={`${tuit.image}`} />
        </div>

        <div className="col-xxl-10 col-xl-10 col-lg-12 ">
          <div><b>{tuit.username}</b>  <BsFillPatchCheckFill size={16} color="blue" />  {tuit.handle}<BsDot size={12} />{tuit.time}
            <span className="wd-delete-icon"><RxCross1 size={14}
              onClick={() => deleteTuitHandler(tuit._id)} /></span></div>


          <p></p>

          <div>Rating: {Number.isInteger(tuit.rating) ? '★'.repeat(tuit.rating) : 'Invalid rating'}</div>
          <div>Comment: {tuit.comment}</div>
          <div>Restaurant: {tuit.name}</div>
          <div>Type: {tuit.restaurantType}</div>

          <div><TuitStats tuit={tuit} /></div>
        </div>

      </div>
    </li>
  );
};

export default RatingItem;