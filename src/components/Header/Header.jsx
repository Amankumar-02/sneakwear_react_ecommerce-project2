import React, {useState, useEffect} from 'react';
import 'remixicon/fonts/remixicon.css';
import './Header.css'
import {updateStyle} from '../../features/slider/sliderSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {dataBase} from '../../dataBase';


function Header({handleInputChange}) {
  const menuItemsName = [
    {name:"Air Force",},
    {name:"Jordan",},
    {name:"Blazer",},
    {name:"Crater",},
    {name:"Hippie",},
  ]
  let dispatch  = useDispatch();
  const slider = (index)=>{
    dispatch(updateStyle(`translateX(-${index*100}vw)`))
  };

  // new data
  const storeData = useSelector(state=>state.cart.cart);

  const [openCart, setOpenCart] = useState({left:"100%", transition: '0.5s'});

  const [noItem, setNoItem] = useState(1);

  let [listCart, setListCart] = useState([]);

  function addItems(dataBase, storeData){
    let newList = dataBase.filter((data)=>data.title === storeData);
      if(newList.map((data)=>data.title === storeData)){
        return newList[0]
      }
      return null;
  }

  let result = addItems(dataBase, storeData);
  useEffect(() => {
    if (result) {
      setListCart((prev) => [...prev, result]);
    }
  }, [result]);
  // if(result){
  //   setListCart((prev)=>[...prev, result])
  //   listCart.push(result)
  // }
  console.log(listCart)

  return (
    <>
      <div className="bg-black text-white pt-[4px] sm:pt-[20px] pb-[8px] px-[20px] sm:px-[40px] sticky lg:sticky top-0 left-0 sm:relative z-50 border-b border-gray-300">
        <div className="navTop flex flex-col sm:flex-row items-center justify-between">
          <div className="navItem">
            <h1 className="text-[1.5em] font-semibold">Sneakwear</h1>
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
          <div className='flex items-center'>
          <div className="profile-container">
          <a href="#" className="me-3 text-lg"><i className="ri-heart-line"></i></a>
          <a href="#cartItems" className="me-3 text-lg openCart" onClick={()=>{setOpenCart({left:"calc(100% - 300px", transition: '0.5s'})}}><i className="ri-shopping-cart-2-line relative"><span className="absolute left-[50%] bg-red-500 rounded-lg px-1 text-[10px] leading-4">1</span></i></a>
          <a href="#" className="me-3 text-lg"><i className="ri-user-add-fill"></i></a>
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
            <h3 key={index} className="menuItem uppercase text-sm sm:text-[1rem] sm:w-[130px] text-center cursor-pointer text-gray-300 hover:text-[1.1rem] hover:sm:text-[1.2rem]" onClick={()=>slider(index)}>
              {data.name}
            </h3>
          ))}
        </div>
      </div>


      <div className="cart fixed top-0 w-[300px] bg-[#dadada] border-s border-red-500 h-[100vh] z-[51]" style={openCart}>
      <h1 className="text-red-500 font-bold text-2xl px-[20px] h-[50px] flex items-center justify-center">Cart</h1>
        <div className="list mx-1">
          {listCart.map((data, index)=>(
            <section key={index} className="card bg-white rounded-lg my-[5px] mx-[2px] sm:my-[10px] sm:mx-[10px] border-2 border-[#ededed] p-[8px] sm:p-[20px] flex flex-col justify-end items-center">
              <img src={data.img} alt={data.title} className='card-img w-[80%] sm:w-[13rem] mb-2 sm:mb-[1rem]'/>
              <div className="card-details my-2">
                <h3 className="card-title sm:mb-[1rem] text-lg sm:text-[1.17em] font-bold w-[100%] sm:w-auto ">{data.title}</h3>
                  <section className="card-price flex justify-between items-center">
                    <div className="price text-[15px] sm:text-[16px]">
                      <p className='inline-block ms-2'> ${data.newPrice}</p> 
                    </div>
                    <div className="bag"><i className="ri-shopping-bag-fill text-[#535353]"></i></div>
                  </section>
                  <div className="flex mt-2">
                  <button className="bg-gray-200 leading-3 px-2 rounded-xl hover:bg-gray-300" 
                  onClick={()=>{setNoItem((prev)=>prev+1)}}
                  >+</button>
                  <p className="mx-4">{noItem}</p>
                  <button className="bg-gray-200 leading-3 px-2 rounded-xl text-2xl hover:bg-gray-300" 
                  onClick={()=>{if(noItem>1){setNoItem((prev)=>prev-1)}}}
                  >-</button>
                  </div>
                </div>
            </section>
          ))}
        </div>
      <div className="checkout absolute bottom-0 w-full grid grid-cols-2">
        <div className="total bg-red-500 text-white w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer">
          $ {listCart[0]?.newPrice * noItem}
          </div>
        <div className="closeCart bg-[#1c1f25] text-white w-full h-[70px] flex justify-center items-center font-semibold cursor-pointer"  onClick={()=>{setOpenCart({left:"100%", transition: '0.5s'})}}>Close</div>
      </div>
    </div>
    </>
  );
}

export default Header