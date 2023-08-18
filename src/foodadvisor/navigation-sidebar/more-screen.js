import {useSelector} from "react-redux";
import React from "react";
import {GrRestaurant} from "react-icons/gr";
import {BsFillTelephoneFill, BsStars} from "react-icons/bs";

function MoreScreen() {
  const currentRes  = useSelector((state) => state.restaurant.currentResName);
  console.log(currentRes)


  return (

      <div><h1>Details & More</h1>
        {currentRes===null &&<div>
          <p></p>
            <h2>This restaurant is not with us yet.</h2>
          <br></br>
        <h2>Click on a restaurant to see more details</h2></div>}


        {currentRes && <div>


          <div className="position-relative mb-2">
            <img
                src={currentRes.imageBanner}
                className="w-100 "/></div>
          <li className="list-group-item">
            <div className="row">
          <h2>{currentRes.name}</h2>
          <div><GrRestaurant/>&nbsp;Find us @&nbsp;{currentRes.address}</div>
          <div><BsStars/>&nbsp;{currentRes.description}</div>
              <p></p>
              <div>{currentRes.details}</div>
              <p></p>
          <div><img
              src={currentRes.image1} className="w-100 "/>
          <img
              src={currentRes.image2} className="w-100 "/>
          <img
              src={currentRes.image3} className="w-100 "/></div>
<h3>Menu Overview</h3>
<div>{currentRes.menu1}</div>
              <div>{currentRes.menu2}</div>
              <div>{currentRes.menu3}</div>
              <p></p>
              <div>Book Now!&nbsp;&nbsp;&nbsp;&nbsp;<BsFillTelephoneFill/>&nbsp;Tel:{currentRes.tel}</div>
              <div>Open: {currentRes.hour}</div>









</div>
          </li>
        </div>}





</div>

);

}
export default MoreScreen;