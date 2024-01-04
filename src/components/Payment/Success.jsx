import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import authService from '../../appwrite/auth';

function Success() {
  const [userDetails, setUserDetails] = useState();
  useEffect(()=>{
    try {
      const getData = authService.account.get()
      getData.then(
        function(res){
          setUserDetails(res)
        }
      )
    } catch (error) {
      console.log(`Get Data error: `, error)
    }
  }, [])
  return (
    <>
      {userDetails ? (
        <>
          <div className="flex flex-col justify-center items-center h-[100vh] bg-gradient-to-b from-gray-900 to-red-500 px-4">
            <h1 className="text-3xl pb-6 italic text-white text-center">
              Your Payment is Successfully Done
            </h1>
            <h1 className="text-3xl pb-6 italic text-white text-center">
              Your order has been placed.
            </h1>
            <h1 className="text-3xl pb-6 italic text-white text-center">
              Return to Home
            </h1>
            <NavLink to="/">
              <button className="text-xl bg-black px-4 py-2 rounded-xl hover:bg-transparent text-red-500 hover:border-4 hover:border-white hover:text-white hover:font-semibold">
                Home
              </button>
            </NavLink>
          </div>
        </>
      ) : (
        <>
        <div className="flex items-center justify-center h-[100vh] bg-gradient-to-b from-gray-900 to-red-500 px-4">
          <h1 className="text-3xl italic text-white text-center">Login Please</h1>
          <NavLink to="/login">
            <button className="ms-4 text-xl bg-black px-4 py-2 rounded-xl hover:bg-transparent text-red-500 hover:border-4 hover:border-white hover:text-white hover:font-semibold">Login</button>
          </NavLink>
        </div>
        </>
      )}
    </>
  );
}

export default Success