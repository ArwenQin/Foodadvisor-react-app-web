import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import RatingItem from "./tuits-item";
import {findTuitsThunk} from "../services/tuits-thunks";


const RatingsList = () => {
  const { tuits, loading } = useSelector(state => state.tuits)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return(
      <ul className="list-group">
        { loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }

        {
          tuits.map(tuit =>
              <RatingItem
                  key={tuit._id} tuit={tuit}/> )
        }
      </ul>
  );
};
export default RatingsList;

