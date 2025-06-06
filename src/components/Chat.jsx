import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import createSocketConnection from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store?.user);
  const userId = user?._id;
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    console.log(chat.data.messages);
    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, txt } = msg;
      return{
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        txt: txt
      }
    });
    setMessages(chatMessages);
  };

  useEffect(()=>{
    fetchChatMessages(); 
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    //as soon as the page loads the socket connection is made and joinchat event is emitted.
    socket.emit("joinChat", { firstName, userId, targetUserId });

    socket.on("messageReceived", ({ firstName, lastName, txt }) => {
      setMessages((messages) => [...messages, { firstName, lastName, txt }]);
    });

    //it gets called when the component unmounts i.e. closing the socket connection.
    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName,
      lastName,
      userId,
      targetUserId,
      txt: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="w-3/4 mx-auto  border border-gray-600 m-5 h-[75vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600 font-bold text-xl text-center text-primary">
        Chat
      </h1>
      <div className="flex-1 overflow-y-scroll p-5">
        {messages.map((msg, index) => {
          return (
            <div className={"chat " +  (((user?.firstName === msg.firstName) && (user?.lastName === msg.lastName)) ? "chat-end" : "chat-start")} key={index}>
              <div className="chat-header">{msg.firstName + " " + msg.lastName}</div>
              <div className="chat-bubble">{msg.txt}</div>
            </div>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-600 flex gap-2 items-center justify-between">
        <input
          type="text"
          placeholder="Enter your message"
          className="input input-primary flex-1"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
