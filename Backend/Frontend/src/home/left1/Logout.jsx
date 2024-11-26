import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

import axios from "axios";
import Cookies from "js-cookie"

import toast from "react-hot-toast";



export default function Logout() {
  const [loading, setLoading] = useState(false)
  const handleLogout = async()=>{
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt")
      setLoading(false);
      toast.success("Logout Succesfully")
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="w-[4%]  bg-slate-950 text-white flex flex-col justify-end">
        <div className="p-3 align-bottom">
          <button>
            <RiLogoutCircleLine className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" 
            onClick={handleLogout}/>
          </button>
        </div>
      </div>
    </>
  );
}
