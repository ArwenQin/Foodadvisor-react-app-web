import React from "react";
import RatingsList from "../tuits-list";

import "./index.css";
import WhatsHappening from "./whats-happening";



function HomeScreen() {
  return(
  <>

  <h4>Home</h4>
    <WhatsHappening/>
  <RatingsList/>
  </>)
}
export default HomeScreen;