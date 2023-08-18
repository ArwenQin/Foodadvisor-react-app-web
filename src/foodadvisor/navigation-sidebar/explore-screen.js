import React from "react";
import ResSummaryList from "../all-res-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
import FiveStarList from "../all-res-summary-list/five-star-list";
import {BsStars} from "react-icons/bs";
import {MdDinnerDining} from "react-icons/md";


function ExploreScreen() {
  return (
  <>

    <div className="position-relative mb-2">
      <img
          src="https://egluu.com/wp-content/uploads/2014/02/tripadvisor.jpg"
           className="w-100 "/>
      <h1 className="position-absolute wd-nudge-up text-white">
        Explore All Restaurants & More !</h1>
    </div>
    <h3 style={{color:'orange'}}>Check Out Our Five Start Restaurants <BsStars/><BsStars/><BsStars/><BsStars/><BsStars/></h3>
<FiveStarList/>
    <p></p>
    <h3 style={{color:'orange'}}>Check Out All Amazing Restaurants <MdDinnerDining/></h3>
  <ResSummaryList/>
  </>
  )}
export default ExploreScreen;