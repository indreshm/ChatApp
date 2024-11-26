import React from 'react'
import useConversation from "../../stateManage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";



function Chatuser() {

    const { selectedConversation } = useConversation();
    const { onlineUsers } = useSocketContext();
    const getOnlineUsersStatus = (userId) => {
      return onlineUsers.includes(userId) ? "Online" : "Offline";
    };
  return (
    <>
      <div className="pb-3 pl-5 pt-5 h-[14vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              {/* <img src="https://media.licdn.com/dms/image/v2/C4D03AQHQ1IM_jzx0rQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657822448713?e=2147483647&v=beta&t=xRTVS8eWD-oXA9C-8x2-g9pRCpi8Md21Ovv5pOFOxxg" /> */}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </>
  );
}

export default Chatuser