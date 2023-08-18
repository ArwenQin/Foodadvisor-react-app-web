import React, {useEffect} from "react";


import ResSummaryItem
  from "./res-summary-item";
import {useDispatch, useSelector} from "react-redux";
import {findRestaurantsThunk} from "../services/restaurant-thunks";

const ResSummaryList = () => {
  const { restaurant, loading } = useSelector(state => state.restaurant)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findRestaurantsThunk())
  }, [])
  return(
      <ul className="list-group">
        { loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {restaurant.map((res) => {
          if (res.ratingsAverage < 5) {
            return <ResSummaryItem key={res._id} res={res} />;
          }
          return null;})}
      </ul>
  );
};
export default ResSummaryList;

