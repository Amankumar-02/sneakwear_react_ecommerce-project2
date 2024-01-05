import React, {useState, useEffect} from 'react';
import 'remixicon/fonts/remixicon.css';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import {updateStyle} from '../../features/slider/sliderSlice';
import {menuItemsName, dataBase, productDataCopy, slideData} from '../../dataBase';
import {useNavigate} from 'react-router-dom';
import authService from "../../appwrite/auth";
import toast from "react-hot-toast";
import {loadStripe} from '@stripe/stripe-js';
import appwriteService from '../../appwrite/database';

function Header({handleInputChange, logo}) {
  let dispatch  = useDispatch();
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState({left:"100%", transition:'0.5s'});
  let [listCart, setListCart] = useState([]);
  // Toggle of login, logout icon state
  const [icon, setIcon] = useState(
    <div onClick={()=>{setListCart([]); navigate("/login")}} className='me-3 text-lg inline-block'>
      <i className="ri-user-add-fill hover:text-red-500"></i>
    </div>
  );
  const storeData = useSelector(state=>state.cart.cart);
  const slider = (index)=>{
    dispatch(updateStyle(`translateX(-${index*100}vw)`))
  };


  // this func manage the cart data
  const processProducts = (source, storeData) => {
    return source.filter((data) => data.title === storeData)[0] || null;
  };
  const cardProductsResult = processProducts(dataBase, storeData);
  const homeProductsResult = processProducts(productDataCopy, storeData);
  const sliderProductsResult = processProducts(slideData, storeData);

  // Here, merge the cart items
  useEffect(() => {
    const updatedCart = [];
    if (cardProductsResult) updatedCart.push(cardProductsResult);
    if (homeProductsResult) updatedCart.push(homeProductsResult);
    if (sliderProductsResult) updatedCart.push(sliderProductsResult);
    setListCart((prev) => [...prev, ...updatedCart]);
  }, [cardProductsResult, homeProductsResult, sliderProductsResult]);

  // Cart Events
  const increaseItem = (title)=>{
      setListCart((prev)=>prev.map((data)=>data.title === title? {...data, noItems: data.noItems+1, newPrice: +data.newPrice + +data.newPrice2 } : data))
  }
  const decreaseItem = (title)=>{
      setListCart((prev)=>prev.map((data)=>data.title === title? {...data, noItems: Math.max(data.noItems - 1, 1), newPrice: Math.max(+data.newPrice - data.newPrice2, data.newPrice2) } : data))
  }
  const deleteItem = (title)=>{
    setListCart((prev)=>prev.filter((data)=>data.title != title));
  }


  // Logout Function
  const logoutUser = async () => {
    try {
      await authService.logout();
      navigate("/");
      console.log(`Logout SuccessFully`);
      setIcon(
      <div onClick={()=>{setListCart([]); navigate("/login")}} className='me-3 text-lg inline-block'>
      <i className="ri-user-add-fill hover:text-red-500"></i>
    </div>
    )
      toast.success("Successfully Logout!");
    } catch (error) {
      console.error("Log-out failed:", error);
      toast.error(error.message);
    }
    setListCart([]);
    setFavDatabase([]);
  };

  // Motitor the toggle state of login from homePage Component
  useEffect(()=>{
    if (logo) {
      setIcon(
        <i className="ri-shut-down-line me-3 text-lg cursor-pointer hover:text-red-500" onClick={logoutUser}></i>
      );
    }
  }, [logo])

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

  // Appwrite order database creation 
  // make payment gateway through Stripe
  const makePayment = async()=>{
    // appwrite database creation of orders
    listCart.map( async(data)=>{
      try{
        await appwriteService.createOrders({
          title:data?.title,
          noItems:data?.noItems,
          amount:data?.newPrice2,
          img:data?.img,
          newPrice:data?.newPrice,
        });
        console.log("Ordered Item Added To Appwrite");
        // toast.success("appwrite updated");
      }catch(error){
        console.log(error);
      }
    });

    //make payment gateway through Stripe
    if(listCart.length>=1){
      try{
        const stripe = await loadStripe("pk_test_51OUoaKSJR0YvHX116PLMoLiXhxnRv2BB0VwPZ6nIHUfUjyF95C8upgiw7VcaNjrmOxMfMqdLiHqHz4BPmwIGVqWs00DI9lsIuG");
      const body = {
        products:listCart
      }
      const headers = {
        "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:7000/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
      });
      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId:session.id
      });
      if(result.error){
        console.log(result.error);
        toast.error("Payment Gatway Suspended!");
      }
      }catch(error){
        console.error("Error during payment:", error);
        toast.error("Payment Gateway Suspended!");
      }
    }
  }

  //this func create a Fav. database in appwrite
  const addFav = async()=>{
    listCart.map( async(data)=>{
      try{
        await appwriteService.createFav({
          title:data?.title,
          noItems:data?.noItems,
          amount:data?.newPrice2,
          img:data?.img,
          newPrice:data?.newPrice,
        });
        console.log("Favourite Item Added To Appwrite");
        toast.success("Added to Fav.");
        setListCart([]);
      }catch(error){
        console.log(error);
      }
    });
  }

  //this func fetch the fav. database from appwrite
  const [favDatabase, setFavDatabase] = useState([]);
  useEffect(()=>{
    try {
    const getFav = appwriteService.listFav()
    getFav.then(res=>{setFavDatabase(res.documents)})
    } catch (error) {
    console.error('Fav Database List failed:', error);
    setFavDatabase([]);
    }
  }, [])

  // this func filter the appwrite fetched Database according to Login User
  const [filteredFavDatabase, setFilteredFavDataBase] = useState([]);
  useEffect(() => {
    const filteredData = favDatabase.filter((data) =>
      data.$permissions[0].slice(11, -2) == userDetails?.$id
    );
    setFilteredFavDataBase(filteredData);
  }, [favDatabase, userDetails]);


  return (
    <>
      <div id="headerWrapper"
        className="bg-black text-white pt-[4px] sm:pt-[20px] pb-[8px] px-[20px] sm:px-[40px] sticky lg:sticky top-0 left-0 sm:relative z-50 border-b border-gray-300"
      >
        <div className="navTop flex flex-col sm:flex-row items-center justify-between">
          <div className="navItem">
            <a href="#">
              <h1 className="text-[1.5em] font-semibold">Sneakwear</h1>
            </a>
          </div>
          <div className="navItem py-1 sm:py-0">
            <div className="flex items-center bg-[#808080] sm:py-2 px-2 sm:px-4 rounded-lg">
              <input
                type="text"
                placeholder="search..."
                className="searchInput bg-transparent cursor-pointer placeholder:text-sm placeholder:text-white outline-none"
                onChange={handleInputChange}
              />
              <i className="ri-search-line"></i>
            </div>
          </div>
          <div className="flex items-center">
            <div className="profile-container">
              <a
                className="me-3 text-lg hover:text-red-500 cursor-pointer"
                onClick={() => {
                  navigate("/orders");
                }}
              >
                <i className="ri-heart-line relative hover:text-red-500">
                  <span className="absolute left-[50%] bg-red-500 rounded-lg px-1 text-[10px] leading-4 text-white">
                    {/* {listCart.length} */}
                    {/* {fetchDatabase2.length} */}
                    {filteredFavDatabase.length}
                  </span>
                </i>
              </a>
              <a
                // href=""
                className="me-3 text-lg openCart cursor-pointer"
                onClick={() => {
                  setOpenCart({
                    left: "calc(100% - 300px",
                    transition: "0.5s",
                  });
                }}
              >
                <i className="ri-shopping-cart-2-line relative  hover:text-red-500">
                  <span className="absolute left-[50%] bg-red-500 rounded-lg px-1 text-[10px] leading-4 text-white">
                    {listCart.length}
                  </span>
                </i>
              </a>
              {icon}
            </div>
            <div id="progressBarText" className="navItem">
              <span
                id="navTop"
                className="limitedOffer text-[12px] sm:text-[1.3em] cursor-pointer"
              >
                Limited Offer!
              </span>
              <div id="progressBar"></div>
            </div>
          </div>
        </div>
        <div className="navBottom flex items-center justify-center flex-wrap gap-3 sm:gap-[6px] mt-2 sm:mt-[20px]">
          {menuItemsName.map((data, index) => (
            <h3
              key={index}
              className="menuItem uppercase text-sm sm:text-[1rem] sm:w-[130px] text-center cursor-pointer text-gray-300 hover:text-[1.1rem] hover:sm:text-[1.2rem]"
              onClick={() => slider(index)}
            >
              {data.name}
            </h3>
          ))}
        </div>
      </div>

      <div id="cartHeader"
        className="cart fixed top-0 w-[300px] bg-[#dadada] border-s border-red-500 h-[100vh] z-[51]"
        style={openCart}
      >
        <h1 className="text-red-500 font-bold text-2xl px-[20px] h-[50px] flex items-center justify-center">
          Cart
        </h1>
        <div className="list mx-1 whitespace-nowrap overflow-x-hidden overflow-y-auto scroll-smooth">
          {listCart.map((data, index) => (
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
                  <div className="flex">
                    <button
                      className="bg-gray-200 leading-3 px-2 rounded-xl hover:bg-gray-300"
                      onClick={() => {
                        increaseItem(data.title);
                      }}
                    >
                      +
                    </button>
                    <p className="mx-4">{data.noItems}</p>
                    <button
                      className="bg-gray-200 leading-3 px-2 rounded-xl text-2xl hover:bg-gray-300"
                      // onClick={()=>{if(noItem>1){setNoItem((prev)=>prev-1)}}}
                      onClick={() => {
                        decreaseItem(data.title);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-red-500 py-1 px-2 text-xs text-white rounded-lg hover:bg-red-600"
                      onClick={() => {
                        deleteItem(data.title);
                        toast.success("Item Removed");
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="checkout absolute bottom-0 w-full grid grid-cols-3">
          {userDetails ? (
            <>
              <div
                className="total bg-red-500 text-white w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer hover:bg-red-600"
                onClick={makePayment}
                // onClick={createDatabase}
              >
                $ {listCart.reduce((total, data) => total + +data.newPrice, 0)}
              </div>
              {/* favourite */}
              <div className='closeCart bg-white text-black w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer hover:bg-gray-300'
                onClick={addFav}
              >
                + Favourite
              </div>
            </>
          ) : (
            <>
              <div
                className="total bg-red-500 text-white w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer hover:bg-red-600"
                onClick={() => {
                  navigate("/login");
                }}
                // onClick={createDatabase}
              >
                $ {listCart.reduce((total, data) => total + +data.newPrice, 0)}
              </div>
              {/* favourite */}
              <div className='closeCart bg-white text-black w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer hover:bg-gray-300'
              onClick={() => {
                navigate("/login");
              }}
              >
                + Favourite
              </div>
            </>
          )}
          {/* <div className='closeCart bg-white text-black w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer hover:bg-gray-300'>
                Favourite
          </div> */}
          <div
            className="closeCart bg-[#1c1f25] text-white w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer hover:bg-gray-900"
            onClick={() => {
              setOpenCart({ left: "100%", transition: "0.5s" });
            }}
          >
            Close
          </div>
        </div>
      </div>
    </>
  );
}

export default Header