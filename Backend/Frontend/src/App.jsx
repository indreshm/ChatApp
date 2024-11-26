import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'
import Logout from './home/left1/Logout'
import Signup from './componenets/Signup'
import Login from './componenets/Login'
import { useAuth } from './context/AuthProvider'

import { Navigate, Route, Routes } from "react-router-dom";
import Loading from './componenets/Loading'

import toast, { Toaster } from "react-hot-toast";


function App() {
      const [authUser, setAuthUser] = useAuth();
      console.log(authUser);

      return (
        <>
          {/* <Loading></Loading> */}

          <Routes>
            <Route
              path="/"
              element={
                authUser ? (
                  <div className="flex h-screen">
                    <Logout></Logout>
                    <Left></Left>
                    <Right></Right>
                    
                  
                    
                    
                  </div>
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to={"/"} /> : <Login />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to={"/"} /> : <Signup />}
            />
          </Routes>
          <Toaster />

          {/* <div className='flex h-screen'>
          <Logout></Logout>
          <Left></Left>
          <Right></Right>
        </div> */}

          {/* <Signup></Signup> */}
          {/* <Signup /> */}

          {/* <Login></Login> */}
        </>
      );
}

export default App
