import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }

  if (requests.length === 0) {
    return (
      <div className="flex justify-center my-8">
        <h1 className="text-bold text-xl font-bold">No Requests Found!!!</h1>
      </div>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl font-bold">Connection Requests</h1>

      {requests.map((request) => {
        const reqid = request._id;
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="mt-6 p-4 rounded-lg bg-base-300 flex w-2/3 mx-auto justify-between"
          >
            <div className="flex">
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
            <div className="my-auto ">
              <button
                className="btn btn-info mx-2"
                onClick={() => reviewRequest("accepted", reqid)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("rejected", reqid)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
