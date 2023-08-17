import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findExploresThunk } from "../services/explore-thunks";

import ExploreThemListItem from "./explore-them-list-item";

const ExploreThemList = () => {
  const { explores, loading } = useSelector(state => state.explores)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findExploresThunk());
  }, []);

  return (
      <ul className="list-group">
        {loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        <li className="list-group-item">
          <h3>Explore Them !</h3>
        </li>
        {
            explores.map(res =>
                <ExploreThemListItem key={res._id} res={res} />
            )
        }
      </ul>
  );
};

export default ExploreThemList;
