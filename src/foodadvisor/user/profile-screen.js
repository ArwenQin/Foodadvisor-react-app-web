import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";

function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    console.log("currentUser", currentUser);
    const [profile, setProfile] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = async () => {
        try {
            await dispatch(updateUserThunk(profile));
            alert('Successfully saved!');
        } catch (e) {
            alert(e);
        }
    };

    const handleLogout = async () => {
        try {
            await dispatch(logoutThunk());
            navigate("/foodadvisor/login");
        } catch (e) {
            alert("Error logging out. Please try again.");
        }
    };

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const { payload } = await dispatch(profileThunk());
                setProfile(payload);
            } catch (e) {
                alert(e);
            }
        };
        loadProfile();
    }, [dispatch]);

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name&nbsp;</label>
                        <input
                            className="form-control"
                            type="text"
                            value={profile.firstName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    firstName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <p></p>
                    <div>
                        <label>Last Name&nbsp;</label>
                        <input
                            className="form-control"
                            type="text"
                            value={profile.lastName}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    lastName: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <p></p>
                    <div>
                        <label>Image for Yourself&nbsp;</label>
                        <input
                            className="form-control"
                            type="text"
                            value={profile.image}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    image: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <p></p>
                    <div>
                        <label>Something Cool About You&nbsp;</label>
                        <textarea
                            className="form-control"
                            type="text"
                            value={profile.intro}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    intro: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <p></p>
                    <div>
                        <label>Details&nbsp;</label>
                        <textarea
                            className="form-control"
                            type="text"
                            value={profile.details}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    details: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <p></p>
                    <div>
                        <label>User Type: </label>
                        <span> {profile.type}</span>
                    </div>
                </div>
            )}
            <button className="btn  mt-2" style={{ backgroundColor: "orange", color: "white", fontWeight: 'bold' }} onClick={handleLogout}>Logout</button >&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn  mt-2" style={{ backgroundColor: "orange", color: "white", fontWeight: 'bold' }} onClick={save}>&nbsp;Save&nbsp;</button>
        </div>
    );
}

export default ProfileScreen;
