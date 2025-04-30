import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = React.useState(user.firstName);
  const [lastName, setLastName] = React.useState(user.lastName);
  const [age, setAge] = React.useState(user.age);
  const [gender, setGender] = React.useState(user.gender);
  const [about, setAbout] = React.useState(user.about);
  const [photoUrl, setPhotoUrl] = React.useState(user.photoUrl);
  const [error, seterror] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    seterror("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      seterror(err.response.data);
    }
  };

  return (
    <div className="flex justify-around items-center ">
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-5 rounded-box">
                <label className="fieldset-label">First Name : </label>
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label className="fieldset-label">Last Name : </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label className="fieldset-label">Age : </label>
                <input
                  type="number"
                  className="input"
                  placeholder="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label className="fieldset-label">Gender : </label>
                <select
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className="select"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Others</option>
                </select>
                <label className="fieldset-label">About : </label>
                <textarea
                  className="textarea"
                  placeholder="about"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <label className="fieldset-label"> Profile Photo URL : </label>
                <input
                  type="url"
                  className="input"
                  placeholder="profile photo url"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
                {error ? <p className="text-red-500 mt-2">{error}</p> : <p></p>}
                <button className="btn btn-primary mt-4" onClick={saveProfile}>
                  Save Profile
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
