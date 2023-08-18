import React from "react";
import {BiFoodMenu} from "react-icons/bi";
import {MdFoodBank} from "react-icons/md";
import {GrScorecard} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {GiKnifeFork} from "react-icons/gi";
import {RxCross1} from "react-icons/rx";
import {
  deleteRestaurantThunk,
  findResByNameThunk
} from "../services/restaurant-thunks";


const ResSummaryItem = (
    {
      res = {
        "name": "Arwen's Thai Food",
        "address": "Vancouver",
        "cuisine": "Thai",
        "description": "Traditional Thai food, seafood and soups.",
        "image": "https://oceansquare.com/wp-content/uploads/2018/04/tesla-logo-500.jpg",
        "ratingsAverage": 4.5
      }
    }
) => {
  const { currentUser } = useSelector((state) => state.user);

const currentResName=res.name;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleExploreClick = async () => {
    await dispatch(findResByNameThunk(currentResName));

   navigate('/tuiter/more');
  };
  const deleteResHandler = (id) => {
    dispatch(deleteRestaurantThunk(id));

  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div><span className="fw-bolder">{res.name}</span> @ {res.address}</div>
            <div className="fw-bolder"><MdFoodBank/>&nbsp;{res.description}</div>
            <div><BiFoodMenu/>&nbsp;Cuisine: {res.cuisine}</div>
            <div><GrScorecard/>&nbsp;{res.ratingsAverage}&nbsp;&nbsp;&nbsp;&nbsp;
              <span onClick={handleExploreClick} style={{ color: 'orange', textDecoration: 'underline' ,fontWeight: 'bold'}}><GiKnifeFork /> Let's Eat!</span>

              {currentUser  && currentUser.type === 'admin' &&
                  <span className="wd-delete-icon"><RxCross1  size={14}
                                                              onClick={() => deleteResHandler(res._id)}/></span>}
             </div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`${res.image}`}/>
          </div>
        </div>
      </li>
  );
};
export default ResSummaryItem;