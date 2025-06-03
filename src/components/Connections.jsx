import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return;
  }

  if (connections.length === 0) {
    return (
      <div className="flex justify-center my-8">
        <h1 className="text-bold text-xl font-bold">No Connections Found!!!</h1>
      </div>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl font-bold">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div  key={_id} className="mt-6 rounded-lg bg-base-300 flex w-2/3 mx-auto justify-between px-3 items-center">
            <div className="p-3 flex w-2/3">
              <div>
                <img
                  src={photoUrl}
                  alt="photo"
                  className="w-20 h-20 rounded-full"
                ></img>
              </div>
              <div className="text-left mx-7 my-auto">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
              </div>
            </div>
            <Link to={"/chat/" + _id}>
              <button className="btn btn-primary mr-5 w-30 hover:translate-y-0.5">
                Chat
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
