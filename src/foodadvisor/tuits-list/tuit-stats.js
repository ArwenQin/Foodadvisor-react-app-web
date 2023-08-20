import {BsChat, BsHearts} from 'react-icons/bs';
import {AiOutlineRetweet} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import React, {useState} from "react";
import "./index.css";
import { updateTuitThunk } from "../services/tuits-thunks";
import {FaHeart, FaThumbsDown} from "react-icons/fa";
import {GiKnifeFork} from "react-icons/gi";
import {findResByNameThunk} from "../services/restaurant-thunks";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";



const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const currentResName=tuit.name;
  const navigate = useNavigate();
  const handleExploreClick = async () => {
    await dispatch(findResByNameThunk(currentResName));

    navigate('/foodadvisor/more');
  };
  return(
    <div className="row">

      <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4 col-4">
        {tuit.liked ? (
            <BsHearts className="text-danger" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes:tuit.likes+1}))} />
        ) : (
          <BsHearts color="black" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))} />
        )}
        <span className="ms-2">{tuit.likes}</span>
      </div>
      <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4 col-4">
        {tuit.disliked ? (
          <FaThumbsDown color="blue" onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes +1 }))} />
        ) : (
          <FaThumbsDown color="black" onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))} />
        )}
        <span className="ms-2">{tuit.dislikes}</span> </div>
<div className="col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4"
     onClick={handleExploreClick} style={{ color: 'orange', textDecoration: 'underline' ,fontWeight: 'bold'}}><GiKnifeFork /> Let's Eat!
</div>



    </div>
  )
}
export default TuitStats;
