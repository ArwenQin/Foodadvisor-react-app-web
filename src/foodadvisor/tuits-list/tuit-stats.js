import {BsChat} from 'react-icons/bs';
import {AiOutlineRetweet} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import React, {useState} from "react";
import "./index.css";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import {FaHeart, FaThumbsDown} from "react-icons/fa";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return(
    <div className="row">
      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
        <a className="nav-link" href="#/tuiter/home"><BsChat size={12} />&nbsp;&nbsp;{tuit.replies}</a>
      </div>
      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
        <a className="nav-link" href="#/tuiter/home"><AiOutlineRetweet size={12} />&nbsp;&nbsp;{tuit.retuits}</a>
      </div>
      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
        {tuit.liked ? (
          <FaHeart className="text-danger" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes:tuit.likes+1 }))} />
        ) : (
          <FaHeart color="black" onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))} />
        )}
        <span className="ms-2">{tuit.likes}</span>
      </div>
      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
        {tuit.disliked ? (
          <FaThumbsDown color="blue" onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))} />
        ) : (
          <FaThumbsDown color="black" onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: true }))} />
        )}
        <span className="ms-2">{tuit.dislikes}</span>
      </div>
      <div className="col-2 d-none d-xxl-block">
        <a className="nav-link" href="#/tuiter/home"><FiShare size={12} />&nbsp;</a>
      </div>
    </div>
  )
}
export default TuitStats;
