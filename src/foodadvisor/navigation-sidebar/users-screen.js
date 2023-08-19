import {useSelector} from "react-redux";
import React from "react";
import {SiFoodpanda} from "react-icons/si";
import {BsStars} from "react-icons/bs";
import {GiCoolSpices} from "react-icons/gi";

function GiCoolSpicesSomething() {
  return null;
}

function UsersScreen() {

  const visitingUser = useSelector((state) => state.user.visitingUser);
  console.log("visitingUser",visitingUser)

  return (
    <div>
      <h1>User Details</h1>
      {visitingUser===null &&<div>
        <p></p>
        <h2>Select a user to see more details about them&nbsp;<SiFoodpanda/></h2></div>}


      {visitingUser && <div>
        <div><img src={visitingUser.image} width={70} className=" rounded-3" /></div>
        <p></p>
        <div>Hi Pandas, this is &nbsp;<span style={{ fontWeight: "bold", color: "orange" }}>{visitingUser.username}</span>&nbsp;<SiFoodpanda/></div>
       <p></p>
        <div><BsStars color="yellow" />&nbsp;{visitingUser.intro}</div>
        <p></p>
        <div><h4><GiCoolSpices color="yellow"/> Something Cool About This Panda</h4>
            <p>{visitingUser.details}</p></div>

    </div>}
        </div>)
}

export default UsersScreen;