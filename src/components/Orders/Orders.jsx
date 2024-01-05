import React, {useState, useEffect} from 'react';
import './Orders.css'
import appwriteService from '../../appwrite/database';
import toast from "react-hot-toast";
import authService from '../../appwrite/auth';
import { useNavigate, NavLink } from 'react-router-dom';

function Orders() {
const navigate = useNavigate();

    //login or logout status get
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

    //orders
    const [ordersList, setOrdersList] = useState([])
    useEffect(()=>{
        try {
        const getOrders = appwriteService.listOrders()
        getOrders.then(res=>{setOrdersList(res.documents)})
        } catch (error) {
        console.error('Orders List failed:', error);
        }
    }, [])

    //favourites
    const [favList, setFavList] = useState([])
    useEffect(()=>{
        try {
        const getFav = appwriteService.listFav()
        getFav.then(res=>{setFavList(res.documents)})
        } catch (error) {
        console.error('Favourite List failed:', error);
        }
    }, [])

    //favourites
    const removeFav = async (id)=>{
        try {
        const updateFav =  await appwriteService.deleteFav(id)
        updateFav.then(res=>{setFavList(res.documents)})
        // updatedTodos.then(res=>{console.log(res)})
        } catch (error) {
        console.log('Favoutite Delete failed:', error)
        }
        window.location.reload();
    }
    //orders
    const removeOrders = async (id)=>{
        try {
        const updateOrders =  await appwriteService.deleteOrders(id)
        updateOrders.then(res=>{setOrdersList(res.documents)})
        // updatedTodos.then(res=>{console.log(res)})
        } catch (error) {
        console.log('Order Delete failed:', error)
        }
        window.location.reload();
    }
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-gray-900 to-red-500 items-center min-h-[100vh]">
        <div className="relative w-full flex justify-center items-center mt-6">
          <button
            className="absolute left-5 md:left-10 text-white"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            <i class="ri-arrow-left-line"></i>Back
          </button>
          <NavLink
            // to="/"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
            className=""
          >
            <h1 className="text-3xl text-gray-300 font-semibold">Sneakwear</h1>
          </NavLink>
        </div>
        {/* Fav */}
        <div className="flex flex-col items-center justify-center mt-6 sm:my-[2rem] mx-[2rem]">
          <h1 className="progressBar text-xl font-semibold text-gray-300 relative">
            Favourites List
            <div
              id="orderProgressBar"
              className={`bg-gray-400 absolute bottom-[-10%] left-0 w-full`}
            ></div>
          </h1>
          {userDetails ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
                {favList.map((data, index) => {
                  if (userDetails?.$id == data.$permissions[0].slice(11, -2)) {
                    return (
                      <section
                        key={index}
                        className="card bg-white rounded-lg my-[5px] mx-[2px] sm:my-[10px] sm:mx-[10px] border-2 border-[#ededed] p-[8px] sm:p-[20px] flex flex-col justify-end items-center"
                      >
                        <img
                          src={data.img}
                          alt={data.title}
                          className="card-img w-[80%] sm:w-[13rem] mb-2 sm:mb-[1rem]"
                        />
                        <div className="card-details my-2 w-[90%]">
                          <h3 className="card-title sm:mb-[1rem] text-lg sm:text-[1.17em] font-bold w-[100%] sm:w-auto ">
                            {data.title}
                          </h3>
                          <section className="card-price flex justify-between items-center">
                            <div className="price text-[15px] sm:text-[16px]">
                              <p className="inline-block ms-2">
                                {" "}
                                ${data.newPrice}
                              </p>
                            </div>
                            <div className="bag">
                              <i className="ri-shopping-bag-fill text-[#535353]"></i>
                            </div>
                          </section>
                          <div className="flex justify-between mt-2">
                            <div className="flex items-center">
                              <p>Qty.</p>
                              <p className="mx-4">{data.noItems}</p>
                            </div>
                            <div>
                              <button
                                className="bg-red-500 py-1 px-2 text-xs text-white rounded-lg hover:bg-red-600"
                                onClick={() => {
                                  removeFav(data.$id);
                                  toast.success("Fav. Item Removed");
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  }
                })}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center my-6">
                <p className="italic text-white text-center">
                  No Items...
                </p>
                {/* <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="text-xl bg-black px-4 py-2 rounded-xl hover:bg-transparent text-red-500 hover:border-4 hover:border-white hover:text-white hover:font-semibold"
                >
                  Login
                </button> */}
              </div>
            </>
          )}
        </div>
        {/* Orders */}
        <div className="flex flex-col items-center justify-center mt-6 sm:my-[2rem] mx-[2rem]">
          <h1 className="progressBar2 text-xl font-semibold text-gray-300 relative">
            Placed / Cancelled Orders
            <div
              id="orderProgressBar"
              className={`bg-gray-400 absolute bottom-[-10%] left-0 w-full`}
            ></div>
          </h1>

          {userDetails ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
                {ordersList.map((data, index) => {
                  if (userDetails?.$id == data.$permissions[0].slice(11, -2)) {
                    return (
                      <section
                        key={index}
                        className="card bg-white rounded-lg my-[5px] mx-[2px] sm:my-[10px] sm:mx-[10px] border-2 border-[#ededed] p-[8px] sm:p-[20px] flex flex-col justify-end items-center"
                      >
                        <img
                          src={data.img}
                          alt={data.title}
                          className="card-img w-[80%] sm:w-[13rem] mb-2 sm:mb-[1rem]"
                        />
                        <div className="card-details my-2 w-[90%]">
                          <h3 className="card-title sm:mb-[1rem] text-lg sm:text-[1.17em] font-bold w-[100%] sm:w-auto ">
                            {data.title}
                          </h3>
                          <section className="card-price flex justify-between items-center">
                            <div className="price text-[15px] sm:text-[16px]">
                              <p className="inline-block ms-2">
                                {" "}
                                ${data.newPrice}
                              </p>
                            </div>
                            <div className="bag">
                              <i className="ri-shopping-bag-fill text-[#535353]"></i>
                            </div>
                          </section>
                          <div className="flex justify-between mt-2">
                            <div className="flex items-center">
                              <p>Qty.</p>
                              <p className="mx-4">{data.noItems}</p>
                            </div>
                            <div>
                              <button
                                className="bg-red-500 py-1 px-2 text-xs text-white rounded-lg hover:bg-red-600"
                                onClick={() => {
                                  removeOrders(data.$id);
                                  toast.success("Order Item Removed");
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  }
                })}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center my-6">
                <p className="italic text-white text-center">No Orders...</p>
                {/* <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="text-xl bg-black px-4 py-2 rounded-xl hover:bg-transparent text-red-500 hover:border-4 hover:border-white hover:text-white hover:font-semibold"
                >
                  Login
                </button> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Orders