import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import './Home.css';
import {fetchCartData} from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Products, Recommended} from '../AddCart/index';
import {SideBar} from '../AddCart/sidebar/index';
// import visa from '../../img/visa.png';
// import master from '../../img/master.png';
import { slideData, featureData, galleryData, initialProductData } from '../../dataBase';
import toast from "react-hot-toast";

function Home({
  handleRadioChange,
  handleClick,
  result
}) {
  const [productData, setProductData] = useState(initialProductData);
  let dispatch  = useDispatch();
  const storeData = useSelector(state=>state.slide.slider);
  // const [buyPanel, setBuyPanel] = useState({transform: 'scale(0)', transition: 'all ease 0.4s'});

  const productToggle1 = (index)=>{
    setProductData((prev) => [
      ...prev.slice(0, index),
      {...prev[index],
        displayImg: productData[index].item1.img,
        title: productData[index].item1.title, desc: productData[index].item1.desc},
      ...prev.slice(index + 1),
    ]);
  }
  const productToggle2 = (index)=>{
    setProductData((prev) => [
      ...prev.slice(0, index),
      {...prev[index],
        displayImg: productData[index].item2.img,
        title: productData[index].item2.title, desc: productData[index].item2.desc},
      ...prev.slice(index + 1),
    ]);
  }


  return (
    <>
      <div id="slider"
        className="slider bg-[url(https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat w-full overflow-hidden"
      >
        <div className={`sliderWrapper flex w-[500vw]`} style={storeData}>
          {slideData.map((data, index) => (
            <div
              key={index}
              className="sliderItem relative flex items-center justify-center w-full h-[240px] sm:h-[500px]"
            >
              <img
                src={data.img}
                alt="slide1"
                className="absolute 
          sm:top-[-10px]
          h-[84%]
          md:h-[90%]
          lg:h-[100%]
          rotate-[10deg]
          z-[999]
          "
              />
              <div
                className={`slideBg absolute w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] rounded-[50%] ${data.color} z-1 top-[10px] sm:top-[-2px] left-[50%] translate-x-[-50%]`}
              ></div>
              <h1 className="sliderTitle absolute text-white top-[12%] sm:top-[30%] left-[7%] sm:left-[74%] lg:left-[76%] sm:w-[250px] sm:text-center sm:text-[26px] lg:text-[40px] leading-[1.2] font-bold uppercase">
                {data.title} <br /> New <br /> Season
              </h1>
              <div
                className={`slidePrice absolute ${data.text} top-[40%] left-[8%] sm:left-[6%] lg:left-[10%] text-center text-[5vw] sm:text-[4vw] lg:text-[5vw]`}
              >
                <p>${data.newPrice}</p>
                <div
                  className={`priceProgressBar bg-gray-300 h-[2px] sm:h-[4px] mt-[-4px] sm:mt-[-14px]`}
                ></div>
              </div>
              <button className="buyButton absolute text-white top-[70%] sm:top-[65%] right-[3%] sm:right-[5%] lg:right-[8%] text-center text-xs sm:text-[20px] lg:text-[28px] font-black border border-gray-500 cursor-pointer bg-black py-1 sm:py-4 px-1 sm:px-4 hover:text-black hover:bg-white rounded-lg" onClick={()=>{
                dispatch(fetchCartData(data.title));
                toast.success("Added to Cart");
                }}>
                Buy Now!
              </button>
            </div>
          ))}
        </div>
      </div>

      <div id="feature"
        className="features flex items-start justify-between p-[10px] sm:p-[50px]"
      >
        {featureData.map((data, index) => (
          <div
            key={index}
            className="feature flex flex-col items-center text-center sm:w-[20vw]"
          >
            {/* <img src={data.img} alt="" className='h-[60%] sm:h-[45%] w-[60%] sm:w-[45%] cursor-pointer' /> */}
            <img
              src={data.img2}
              alt="free-shipping"
              className="h-[60%] sm:h-[45%] w-[60%] sm:w-[45%] cursor-pointer"
            />
            <span className="featureTitle font-semibold text-[10px] sm:text-[17px] pt-1 uppercase">
              {data.title}
            </span>
            <span className="featureDesc text-[8px] sm:text-[15px] w-[80%] sm:w-[50%] text-gray-500">
              {data.desc}
            </span>
          </div>
        ))}
      </div>

      <div id="product" className="products w-full overflow-hidden">
        <div className="productWrapper flex w-[500vw]" style={storeData}>
          {productData.map((data, index) => (
            <div key={index} className="product w-full h-[240px] sm:h-[500px]">
              <img
                src={data.displayImg}
                alt="product1"
                className="h-[70%] sm:h-[60%] lg:h-[85%] absolute top-[30px] sm:top-[50px] lg:top-[18px] left-[2%] rotate-[12deg]"
              />
              <div className="productDetails absolute top-[8%] sm:top-[2%] right-[2%] w-[40%] p-[20px] sm:p-[50px]">
                <h1 className=" productTitle text-[18px] sm:text-[60px] font-bold text-white sm:tracking-[-2px] leading-[1] capitalize">
                  {data.title}
                </h1>
                <h2 className="productPrice text-white text-[14px] sm:text-[30px] mt-[4px] sm:mt-[10px]">
                  {data.price}
                </h2>
                <p className="productDesc1 text-xs sm:text-[16px] text-gray-300 w-[70%] leading-5">
                  {data.desc}
                </p>
                <p className="productDesc2 text-[9px] sm:text-[16px] text-gray-300 leading-[9px] w-[100%]">
                  {data.mobDesc}
                </p>
              </div>

              <div className="colors absolute bottom-[46%] sm:bottom-[42%] right-[26%] sm:right-[33%] flex">
                <div
                  className="color h-[15px] sm:h-[30px] w-[15px] sm:w-[30px] rounded-sm sm:rounded-md me-[10px] cursor-pointer hover:border-[2px] hover:border-black"
                  style={{ backgroundColor: `${data.item1.color}` }}
                  onClick={() => productToggle1(index)}
                ></div>
                <div
                  className="color h-[15px] sm:h-[30px] w-[15px] sm:w-[30px] rounded-sm sm:rounded-md cursor-pointer hover:border-[2px] hover:border-black"
                  style={{ backgroundColor: `${data.item2.color}` }}
                  onClick={() => productToggle2(index)}
                ></div>
              </div>

              <div className="sizes absolute bottom-[34%] sm:bottom-[30%] right-[16%] sm:right-[23%] flex">
                <div className="size text-[12px] sm:text-[20px] text-white border me-2 sm:me-4 border-white rounded-md cursor-pointer py-[0px] sm:py-[0.5vw] px-[2px] sm:px-[1vw] hover:border-[2px] hover:border-black">
                  42
                </div>
                <div className="size text-[12px] sm:text-[20px] text-white border me-2 sm:me-4 border-white rounded-md cursor-pointer py-[0px] sm:py-[0.5vw] px-[2px] sm:px-[1vw] hover:border-[2px] hover:border-black">
                  43
                </div>
                <div className="size text-[12px] sm:text-[20px] text-white border me-2 sm:me-4 border-white rounded-md cursor-pointer py-[0px] sm:py-[0.5vw] px-[2px] sm:px-[1vw] hover:border-[2px] hover:border-black">
                  44
                </div>
              </div>

              <button
                className="productButton cursor-pointer bg-black text-white text-[12px] sm:text-[18px] rounded-lg py- sm:py-2 px-1 sm:px-4 border border-gray-300 absolute bottom-[22%] sm:bottom-[18%] right-[22%] sm:right-[30%] hover:text-black hover:bg-white hover:font-semibold"
                // onClick={()=>{setBuyPanel({transform: 'scale(1)', transition: 'all ease 0.4s'})}}
                onClick={() => {
                  dispatch(fetchCartData(data.title));
                  toast.success("Added to Cart");
                }}
              >
                Buy Now
              </button>

              {/* <div className="payment absolute top-[-10%] left-[0] right-0 bottom-0 m-auto py-[6px] sm:py-[10px] px-[20px] sm:px-[40px] w-[180px] sm:w-[400px] h-[210px] sm:h-[430px] bg-white flex flex-col rounded-xl" style={buyPanel}>
            <h1 className="payTitle text-gray-500 text-xs sm:text-[20px] font-semibold sm:mt-2">Personal Information</h1>
            <label htmlFor={`infoName${index}`} className='text-[10px] sm:text-[14px] sm:mt-2'>Name and Surname</label>
            <input type="text" id={`infoName${index}`} placeholder='John Doe' className='payInput px-[6px] sm:p-[6px] text-[8px] sm:text-[16px] border-b-2 border-gray-300 pb-0 outline-none'/>
            <label htmlFor={`infoNumb${index}`} className='text-[10px] sm:text-[14px] sm:mt-2'>Phone Number</label>
            <input type="number" id={`infoNumb${index}`} pattern="\d*" maxLength="10" placeholder='+1 234 5678' className='payInput px-[6px] sm:p-[6px] text-[8px] sm:text-[16px] border-b-2 border-gray-300 pb-0 outline-none'/>
            <label htmlFor={`infoAddress${index}`} className='text-[10px] sm:text-[14px] sm:mt-2'>Address</label>
            <input type="text" id={`infoAddress${index}`} placeholder='Elton St 21-22-145' className='payInput px-[6px] sm:p-[6px] text-[8px] sm:text-[16px] border-b-2 border-gray-300 pb-0 outline-none'/>
            <h1 className="payTitle text-gray-500 text-xs sm:text-[20px] mt-1 sm:mt-2 font-semibold">Card Information</h1>
            <div className="cardIcons flex">
              <img src={visa} alt="" className='cardIcon w-[15%] me-2 cursor-pointer'/>
              <img src={master} alt="" className='cardIcon w-[15%] cursor-pointer'/>
            </div>
            <input type="password" maxLength="16" placeholder='Card Number' className='border-b-2 border-gray-300 outline-none px-[6px] text-[8px] sm:text-[16px]'/>
            <div className="cardInfo flex mt-1 sm:mt-2">
              <input type="text" placeholder='mm' maxLength="2" className='w-[33%] border-b-2 border-gray-300 me-2 outline-none px-[6px] text-[8px] sm:text-[16px]'/>
              <input type="text" placeholder='yyyy' maxLength="2" className='w-[33%] border-b-2 border-gray-300 me-2 outline-none px-[6px] text-[8px] sm:text-[16px]'/>
              <input type="password" placeholder='cvv' maxLength="3"  className='w-[33%] border-b-2 border-gray-300 me-2 outline-none px-[6px] text-[8px] sm:text-[16px]'/>
            </div>
            <button className="payBtn w-full bg-green-500 outline-none mt-1 sm:mt-3 sm:py-1 rounded-md text-white text-[12px] sm:text-[16px] font-semibold">Checkout!</button>
            <button className='absolute right-[5%] sm:right-[6%] top-[4%] sm:top-[4%] bg-gray-300 px-[2px] sm:px-2 leading-3 text-xs sm:leading-6 border border-black' onClick={()=>{setBuyPanel({transform: 'scale(0)', transition: 'all ease 0.4s'})}}>X</button>
          </div> */}
            </div>
          ))}
        </div>
      </div>
      <div id="gallery" className="gallery p-[10px] sm:p-[50px] flex">
        {galleryData.map((data, index) => (
          <div
            key={index}
            className="galleryItem w-[33.3%] p-[10px] sm:p-[50px]"
          >
            <h1 className="galleryTitle text-center text-[10px] sm:text-2xl font-semibold mb-1 sm:mb-2">
              {data.title}
            </h1>
            <img src={data.img} alt="" className="galleryImg w-[100%]" />
          </div>
        ))}
      </div>

      {/* Here is the Cart Data  */}
      <div id="cartItems" className="relative">
        <SideBar handleRadioChange={handleRadioChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>

      <div id="newSeason" className="newSeason flex bg-[#111111]">
        <div className="nsItem w-[33.3%] p-[3vw]">
          <img
            src="https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
            alt=""
            className="nsImg w-full h-full object-cover"
          />
        </div>
        <div className="nsItem w-[33.3%] py-8 sm:py-[150px] text-white flex flex-col justify-between items-center text-center">
          <h3 className="nsTitleSm text-xs sm:text-[24px] uppercase">
            Winter New Arrivals
          </h3>
          <h1 className="nsTitle text-sm sm:text-[30px] font-semibold uppercase">
            New Season Arrivals
          </h1>
          <h1 className="nsTitle text-sm sm:text-[30px] font-semibold uppercase">
            New Collection
          </h1>
          <a href="#">
            <button className="nsButton bg-white text-[10px] sm:text-[20px] text-black leading-3 sm:leading-none w-[80%] sm:w-auto p-1 sm:p-[15px] font-semibold rounded-lg sm:rounded-none hover:border-2 hover:border-white hover:bg-transparent hover:text-white">
              Choose Your Style
            </button>
          </a>
        </div>
        <div className="nsItem w-[33.3%] p-[3vw]">
          <img
            src="https://images.unsplash.com/photo-1599069692392-61fad306d9cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt=""
            className="nsImg w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Home