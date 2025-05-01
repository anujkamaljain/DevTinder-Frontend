import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setnewPassword] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  const handleChangePass = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/password",
        { oldPassword, newPassword },
        { withCredentials: true }
      );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Change Password</h2>
          <div>
            <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-5 rounded-box">
              <label className="fieldset-label">Old Password</label>
              <input
                type="password"
                className="input"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <label className="fieldset-label">New Password</label>
              <input
                type="password"
                className="input"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
              />
              <button
                className="btn btn-primary mt-4"
                onClick={handleChangePass}
              >
                Change Password
              </button>
            </fieldset>
          </div>
          {showToast && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-success">
                <span>Password Changed successfully.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
