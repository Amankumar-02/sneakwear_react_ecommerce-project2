import React, {useState, useEffect} from 'react';
import appwriteService from '../../appwrite/database';
import toast from "react-hot-toast";
import authService from '../../appwrite/auth';
import { useNavigate } from 'react-router-dom';

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
    // console.log(userDetails)

    //orders
    const [listCart, setListCart] = useState([])
    useEffect(()=>{
        try {
        const getOrders = appwriteService.listDatabase()
        getOrders.then(res=>{setListCart(res.documents)})
        } catch (error) {
        console.error('Database List failed:', error);
        }
    }, [])
    // console.log(listCart)

    //favourites
    const [listCart2, setListCart2] = useState([])
    useEffect(()=>{
        try {
        const getOrders = appwriteService.listDatabase2()
        getOrders.then(res=>{setListCart2(res.documents)})
        } catch (error) {
        console.error('Database List failed:', error);
        }
    }, [])
    // console.log(listCart2)

    //favourites
    const removeItem2 = async (id)=>{
        try {
        const updateOrders =  await appwriteService.deleteDatabase2(id)
        updateOrders.then(res=>{setListCart2(res.documents)})
        // updatedTodos.then(res=>{console.log(res)})
        } catch (error) {
        console.log('Database Delete failed:', error)
        }
        window.location.reload();
    }
    //orders
    const removeItem = async (id)=>{
        try {
        const updateOrders =  await appwriteService.deleteDatabase(id)
        updateOrders.then(res=>{setListCart(res.documents)})
        // updatedTodos.then(res=>{console.log(res)})
        } catch (error) {
        console.log('Database Delete failed:', error)
        }
        window.location.reload();
    }
  return (
    <>
      <div className="flex flex-col ">
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          SneakWear
        </h1>
        <h2>Your Orders</h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 sm:mt-[2rem] mx-[2rem]">
        <h1 className="text-3xl font-semibold">Favourites</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
          {listCart2.map((data, index) => {
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
                        <p className="inline-block ms-2"> ${data.newPrice}</p>
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
                            removeItem2(data.$id);
                            toast.success("Item Removed");
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
      </div>
      <div className="flex flex-col items-center justify-center mt-2 sm:mt-[2rem] mx-[2rem]">
        <h1 className="text-3xl font-semibold">Previous Orders</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
          {listCart.map((data, index) => {
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
                        <p className="inline-block ms-2"> ${data.newPrice}</p>
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
                            removeItem(data.$id);
                            toast.success("Item Removed");
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
      </div>
    </>
  );
}

export default Orders