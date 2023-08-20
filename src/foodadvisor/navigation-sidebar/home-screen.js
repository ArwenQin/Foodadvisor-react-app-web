import React from "react";
import { useSelector } from "react-redux";
import RatingsList from "../tuits-list";

import "./index.css";
import WhatsHappening from "./whats-happening";
import PublishRes from "./publish-res";

function HomeScreen() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <>
      <h4>Welcome To FoodAdvisor</h4>
      <p></p>
      {currentUser ? (currentUser.type === "owner" ? null : <WhatsHappening />) : null}
      <RatingsList />
    </>
  );
}

export default HomeScreen;
