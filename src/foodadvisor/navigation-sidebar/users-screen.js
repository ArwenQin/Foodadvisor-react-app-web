import {useSelector} from "react-redux";
import React from "react";

function UsersScreen() {

  const visitingUser = useSelector((state) => state.user.visitingUser);
  console.log("visitingUser",visitingUser)

  return (
    <div>
      <h1>User Details</h1>;
      {visitingUser===null &&<div>
        <p></p>
        <h2>Select a user to see more details about them</h2></div>}


      {visitingUser && <div>
        <div>{visitingUser.username}</div>
        <div><imag src={visitingUser.image}/></div>
          <div>{visitingUser.details}</div>
            <div>{visitingUser.intro}</div>
    </div>}
        </div>)
}

export default UsersScreen;