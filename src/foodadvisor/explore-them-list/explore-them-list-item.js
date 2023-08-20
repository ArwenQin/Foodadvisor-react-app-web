import React from "react";
import "./index.css";
import {RxCross1} from "react-icons/rx";
import {deleteExploreThunk, updateExploreThunk} from "../services/explore-thunks";
import {useDispatch, useSelector} from "react-redux";
import {GrScorecard} from "react-icons/gr";
import {MdOutlineFastfood} from "react-icons/md";
import { useNavigate } from "react-router";
import {BsHearts, BsStars} from "react-icons/bs";
import {findResByNameThunk} from "../services/restaurant-thunks";


const ExploreThemListItem = (
    {
      res = { name: 'Panda Express', score:4.9, likes:291, highlights:"best chinese food",year:1999,
        image: 'https://cdn.cookielaw.org/logos/fbcad385-5bbd-48ba-97d4-e5bcabcd10b9/67c1852a-0424-4c45-ae27-c587b2b01745/573a432a-97c1-4b6f-b44e-1911f400a20f/1200px-Panda_Express_logo.svg.png' }
    }
) => {

  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteResHandler = (id) => {
    dispatch(deleteExploreThunk(id));

  }


  const handleExploreClick = async () => {
    await dispatch(findResByNameThunk(res.name));
    navigate('/foodadvisor/more');
  };

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle wd-center-image" height={48} width={48}src={`${res.image}`} />
          </div>
          <div className="col-8 wd-z-index">
            <div className="fw-bold ">{res.name}</div>
            <div><MdOutlineFastfood/>&nbsp; since&nbsp; {res.year}</div>
            <div><BsStars color={"orange"}/>&nbsp;{res.score}&nbsp;&nbsp;&nbsp;<BsHearts color={"red"}onClick={() => dispatch(updateExploreThunk({ ...res, likes:res.likes+1}))} />&nbsp;{res.likes}</div>

          </div>
          <div className="col-2">
            <button className="btn  rounded-pill float-end bg-orange" style={{ backgroundColor: 'orange',color: 'white', fontWeight: 'bold'}}  onClick={handleExploreClick}>Explore</button>
            {currentUser  && currentUser.type === 'admin' &&
            <span className="wd-delete-icon"><RxCross1  size={14}
                                                        onClick={() => deleteResHandler(res._id)}/></span>}
          </div>
        </div>
        <div>{res.highlights}</div>
      </li>
  );
};
export default ExploreThemListItem;

