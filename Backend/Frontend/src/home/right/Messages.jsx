import React, { useEffect, useRef } from "react";
import Message from './Message.jsx';
import useGetMessage from "../../context/useGetMesssage.js";
import Loading from "../../componenets/Loading.jsx";

// import useGetSocketMessage from "../../context/useGetSocketMessage.js";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";


function Messages() {

    const { loading, messages } = useGetMessage();
    // useGetSocketMessage(); // listing incoming messages
    useGetSocketMessage();
    console.log(messages);
      
      //this funct is for down the chat and not on top 
      const lastMsgRef = useRef();
      useEffect(() => {
        setTimeout(() => {
          if (lastMsgRef.current) {
            lastMsgRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 100);
      }, [messages]);


    return (
      <>
        <div
          className="py-2 flex-indresh overflow-y-auto"
          style={{ minHeight: "calc(75vh)" }}
        >
          {/* using mapping javascript */}

          {loading ? (
            <Loading />
          ) : (
            messages.length > 0 &&
            messages.map((message) => (
              <div key={message._id} ref={lastMsgRef}>
                <Message message={message} />
              </div>
            ))
          )}

          {!loading && messages.length === 0 && (
            <div>
              <p className="text-center mt-[20%]">
                Say! Hi to start the conversation
              </p>
            </div>
          )}
        </div>
      </>
    );
}

export default Messages
