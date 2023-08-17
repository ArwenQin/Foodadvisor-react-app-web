import React, {useEffect, useState} from "react";
import {createExploreThunk} from "../services/explore-thunks";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";




function AdminScreen() {


  const [ profile, setProfile ] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async () => { try {
    await dispatch(createExploreThunk(profile));

  } catch (e) {
    alert(e);
  }
  };



  return ( <div>
    <h1>Manage Explore-Them-List</h1>
          <div>
            <label>Restaurant Name</label>
            <input type="text" value={profile.name}
                   onChange={(event) => {
                     const newProfile = {
                       ...profile, name: event.target.value,
                     };
                     setProfile(newProfile);
                   }}/>
            <p></p>
          </div>
          <div>
            <label>In Operation Since</label>
            <input type="text" value={profile.year}
                   onChange={(event) => {
                     const inputValue = event.target.value;
                     if (/^\d*$/.test(inputValue)) {
                       const newProfile = {
                         ...profile,
                         year: inputValue,
                       };
                       setProfile(newProfile);
                     } else {
                       alert('Please enter a valid integer for year.');
                     }}}/>
            <p></p>
          </div>

        <div>
          <label>Highlights</label>
          <input type="text" value={profile.highlights}
                 onChange={(event) => {
                   const newProfile = {
                     ...profile, highlights: event.target.value,
                   };
                   setProfile(newProfile);
                 }}/>
          <p></p>
        </div>

        <div>
          <label>Likes Won</label>
          <input type="text" value={profile.likes}
                 onChange={(event) => {
                   const inputValue = event.target.value;
                   if (/^\d*$/.test(inputValue)) {
                     const newProfile = {
                       ...profile,
                       likes: inputValue,
                     };
                     setProfile(newProfile);
                   } else {
                     alert('Please enter a valid integer for likes won.');
                   }}}/>
          <p></p>
        </div>

        <div>
          <label>Stars Won</label>
          <input type="text" value={profile.score}
                 onChange={(event) => {
                   const inputValue = event.target.value;
                   if (/^\d*\.?\d*$/.test(inputValue)) {
                     const newProfile = {
                       ...profile,
                       score: inputValue,
                     };
                     setProfile(newProfile);
                   } else {
                     alert('Please enter a valid decimal for stars won.');
                   }}}/>
          <p></p>
        </div>

        <div>
          <label>Upload The Logo Address</label>
          <input type="text" value={profile.image}
                 onChange={(event) => {
                   const newProfile = {
                     ...profile, image: event.target.value,
                   };
                   setProfile(newProfile);
                 }}/>
          <p></p>
        </div>

        <button onClick={save}>Save  </button></div>
    )}



export default AdminScreen;

