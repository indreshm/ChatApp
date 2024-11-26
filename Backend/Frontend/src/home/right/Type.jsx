import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

import useSendMessage from "../../context/useSendMessage.js";




function Type() {

    const [message, setMessage] = useState("");
    const { loading, sendMessages } = useSendMessage();

      const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        await sendMessages(message);
        setMessage("");
      };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" flex space-x-3 h-[10vh] text-center bg-gray-800">
          <div className="w-[70%] mx-4">
            <input
              type="text"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" border-[1px] border-gray-700 py-3 px-3 rounded-xl flex items-center w-full grow outline-none bg-slate-700 mt-1"
            />
          </div>
          <button className="text-3xl bottom-0">
            <IoSend />
          </button>
        </div>
      </form>
    </>
  );
}

export default Type
