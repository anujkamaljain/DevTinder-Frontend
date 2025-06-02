import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed || !user) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, [user]);

  if(!feed){
    return(
      <div className="text-center text-2xl my-20 flex flex-col justify-center items-center">Loading user feed...
    <span className="loading loading-spinner text-info mt-10 loading-xl"></span>
    </div>
    )
  }

  if(feed.length === 0){
    return (
      <div className="text-center text-2xl my-20 flex flex-col justify-center items-center">No feed available.
    </div>
    )
  }

  return (
    feed && (
      <div className="flex justify-center my-16">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
