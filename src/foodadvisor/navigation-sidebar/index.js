import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {AiFillHome, AiOutlineCloudUpload} from "react-icons/ai";
import {BsHash,BsEnvelope,BsBookmark,BsPerson} from "react-icons/bs";
import {LiaListSolid} from "react-icons/lia";
import {CiCircleMore, CiLogin} from "react-icons/ci";
import {MdAppRegistration} from "react-icons/md";
import {RiAdminLine} from "react-icons/ri";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);


  const { pathname } = useLocation();
  const [ignore, foodadvisor, active] = pathname.split("/");
  const links = [{ icon: <AiFillHome />, text: "home" },
    { icon: <BsHash/>, text: "explore" },
    { icon: <LiaListSolid/>, text: "users" },
    { icon: <CiCircleMore/>, text: "more" }
  ]
  return (
      <div className="list-group">
        {links.map((link) =>
            <Link to={`/foodadvisor/${link.text}`} className={`list-group-item text-capitalize ${active === link.text ? "active " : ""}`}
                  style={active === link.text ? { backgroundColor: "orange" } : null}>
              {link.icon} &nbsp;<span className="d-none d-xl-inline">{link.text}</span>
            </Link>

        )}
        {!currentUser && <Link className={`list-group-item text-capitalize ${active === 'login' ? 'active' : ''}`}
                               style={active === 'login' ? { backgroundColor: "orange" } : null}to="/foodadvisor/login">  <CiLogin/> &nbsp;<span className="d-none d-xl-inline">Login </span>  </Link>}
        {!currentUser && <Link className={`list-group-item text-capitalize ${active === 'register' ? 'active' : ''}`}
                               style={active === 'register' ? { backgroundColor: "orange" } : null}to="/foodadvisor/register"><MdAppRegistration/>&nbsp;<span className="d-none d-xl-inline">Register</span></Link>}
        { currentUser && <Link className={`list-group-item text-capitalize ${active === 'profile' ? 'active' : ''}`}
                               style={active === 'profile' ? { backgroundColor: "orange" } : null}to="/foodadvisor/profile"><BsPerson/> &nbsp;<span className="d-none d-xl-inline">Profile</span> </Link>}
        {currentUser !== null ? (
            currentUser.type === 'admin' ? (
                <Link className={`list-group-item text-capitalize ${active === 'admin' ? 'active' : ''}`}
                      style={active === 'admin' ? { backgroundColor: "orange" } : null}to="/foodadvisor/admin">
                  <RiAdminLine/> <span className="d-none d-xl-inline">Admin</span>
                </Link>
            ) : null
        ) : null}

        {currentUser !== null ? (
            currentUser.type === 'owner' ? (
                <Link className={`list-group-item text-capitalize ${active === 'upload' ? 'active' : ''}`}
                      style={active === 'upload' ? { backgroundColor: "orange" } : null}to="/foodadvisor/upload">
                  <AiOutlineCloudUpload/> <span className="d-none d-xl-inline">Upload</span>
                </Link>
            ) : null
        ) : null}

        <div className="list-group-item">
          <img
              src="https://i.pinimg.com/736x/8a/27/30/8a2730a029ab9f7aebb1828cf935a975.jpg"
              alt="Bottom Image"
              className="d-block mx-auto"
              style={{ width: "100%" }}
          />
        </div>

      </div>
  );
};
export default NavigationSidebar;

