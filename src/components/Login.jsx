import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true);
  const [error, seterror] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: Email,
          password: Password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      seterror(err?.response?.data || "Something went wrong!!");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName: FirstName,
          lastName: LastName,
          emailId: Email,
          password: Password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      seterror(err?.response?.data || "Something went wrong!!");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <div>
            <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-5 rounded-box">
              {isLogin ? (
                <></>
              ) : (
                <>
                  <label className="fieldset-label">First Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="First Name"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label className="fieldset-label">Last Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}
              <label className="fieldset-label">Email ID</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="fieldset-label">Password </label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error ? <p className="text-red-500 mt-2">{error}</p> : <p></p>}
              <button className="btn btn-primary mt-4" onClick={isLogin ? handleLogin : handleSignUp}>
                {isLogin ? "Login" : "Sign Up"}
              </button>
              <p
                className="mt-2 text-center cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "New to devTinder ? Sign Up" : "Already have an account ? Login"}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
