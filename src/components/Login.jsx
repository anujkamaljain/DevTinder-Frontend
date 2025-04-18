import React from "react";
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

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId: Email,
        password: Password
      }, {withCredentials: true});
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset w-xs bg-base-300 border border-base-300 p-5 rounded-box">
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

              <button className="btn btn-primary mt-4" onClick={handleLogin}>
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
