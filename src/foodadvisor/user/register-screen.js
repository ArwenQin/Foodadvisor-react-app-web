import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { registerThunk } from "../services/auth-thunks";
function RegisterScreen() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [type, setType] = useState("customer");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password, type }));

    } catch (e) {
      alert(e);
    }
    navigate('/foodadvisor/login');
  };


  return (
      <div>
        <h1>Register Screen</h1>
        <div className="mt-2">
          <label>Username</label>
          <input className="form-control" type="text" value={username}
                 onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input className="form-control" type="password" value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <div className="mt-2">
          <label htmlFor="select-one-type">
            Select User Type
          </label>
          <br/>
          <select id="select-one-type" type="text"  onChange={(event) => setType(event.target.value)}>
            <option value="customer">Customer</option>
            <option value="owner">Owner</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        <p></p>
        <button className="btn  mt-2" style={ { backgroundColor: "orange",color: "white",fontWeight: 'bold' }}
                onClick={handleRegister}>
          Register
        </button>
      </div>
  );

}
export default RegisterScreen;

