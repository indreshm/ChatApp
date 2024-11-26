import React, { useEffect } from "react";
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'
import useConversation from "../../stateManage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";


export default function Right() {

    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
      return setSelectedConversation(null);
    }, [setSelectedConversation]);

  return (
    <div className="w-[70%]  bg-slate-950 text-white">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser></Chatuser>
            <div
              className="py-2 flex-indresh overflow-y-auto"
              style={{ maxHeight: "calc(75vh)" }}
            >
              <Messages></Messages>
            </div>
            <Type></Type>
          </>
        )}
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div className="w-[70%]  bg-slate-950 text-white">
        
  //       <Chatuser></Chatuser>
  //       <div className='py-2 flex-indresh overflow-y-auto' style={{maxHeight:"calc(75vh)"}}>
  //         <Messages></Messages>
  //       </div>
        
  //       <Type></Type>
  //     </div>
  //   </>
  // );

  
}

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
