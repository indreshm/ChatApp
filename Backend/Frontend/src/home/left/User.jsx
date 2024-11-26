import React from 'react'
import useConversation from '../../statemanage/useConversation.js';

import { useSocketContext } from "../../context/SocketContext.jsx";


function User({ user }) {
  
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-14 rounded-full">
            {/* <img src="https://media.licdn.com/dms/image/v2/C4D03AQHQ1IM_jzx0rQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657822448713?e=2147483647&v=beta&t=xRTVS8eWD-oXA9C-8x2-g9pRCpi8Md21Ovv5pOFOxxg" /> */}
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User
