import React from 'react'
import 'remixicon/fonts/remixicon.css';
import './Footer.css'
import { footerData } from '../../dataBase';

function Footer() {
  
  return (
    <>
    {/* new */}
    <div className="footer bg-gray-800 flex">
      <div className="footerLeft flex w-[65%] py-[20px] sm:py-[24px] px-[20px] sm:px-[50px] justify-between">
        {footerData.map((data, index) => (
          <div key={index} className="footerMenu text-white">
            <h1 className="FMenuTitle text-[12px] sm:text-lg font-semibold text-center">{data.title}</h1>
            <ul className="fMenuList">
              {data.more.map((data2, index2) => (
                <a key={index2} href="#" className="block">
                  <li className="fListItem text-[10px] sm:text-sm text-gray-400 text-center relative">
                    {data2.subTitle}
                    <div
                      id="footerProgressBar"
                      className={`${data2.color} absolute bottom-[-10%] left-0 w-full h-0 transition-height duration-300 ease-in-out`}
                    ></div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footerRight w-[35%] h-full py-[24px] bg-red-500 flex flex-col justify-between items-center">
        <div className="footerRightMenu w-[90%] sm:w-auto">
          <h1 className="fMenuTitle text-xs leading-3 sm:w-full sm:text-lg -tracking-tighter">
            Subscribe to our newsletter
          </h1>
          <div className="fMenuMail mt-1 sm:mt-0 flex">
            <input
              type="text"
              placeholder="your@email.com"
              className="fMenuInput px-1 sm:p-[5px] outline-none w-[100%] sm:w-auto"
            />
            <button className="fMenuButton sm:ms-1 sm:p-[5px] text-[12px] sm:text-[16px] bg-black text-white hover:border hover:border-black hover:text-black hover:bg-transparent hover:font-semibold block sm:inline-block w-full sm:w-auto">
              Join !
            </button>
          </div>
        </div>
        <div className="footerRightMenu flex my-2 sm:my-5 w-[90%] sm:w-auto">
          <h1 className="fMenuTitle text-xs sm:text-xl">Follow Us</h1>
          <div className="fIcons sm:ms-[30px] flex">
            <i className="ri-facebook-circle-line me-2 text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
            <i className="ri-twitter-x-line me-2 text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
            <i className="ri-instagram-line me-2 text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
            <i className="ri-whatsapp-line text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
          </div>
        </div>
        <div className="footerRightMenu w-[90%] sm:w-auto hidden sm:inline-block">
          <span className="copyRight text-[10px] sm:text-[16px]">
            <i className="ri-at-line"></i>AmanKr. All rights reserved, 2024.
          </span>
        </div>
      </div>
    </div>

    {/* old */}
    {/* <div className="footer bg-gray-800 flex">
      <div className="footerLeft flex w-[65%] py-[20px] sm:py-[24px] px-[20px] sm:px-[50px] justify-between">
        {footerData.map((data, index)=>(
          <div key={index} className="footerMenu text-white">
            <h1 className="FMenuTitle text-[12px] sm:text-lg font-semibold text-center">{data.title}</h1>
            <ul className="fMenuList">
            {data.more.map((data2, index2)=>(
              <a key={index2} href="#">
              <li className='fListItem text-[10px] sm:text-sm text-gray-400 text-center'>{data2.subTitle}
              <div id="footerProgressBar" 
              className={`${data2.color}`}
              ></div>
              </li>
              </a>
              ))}
              </ul>
          </div>
        ))}
      </div>
      <div className="footerRight w-[35%] h-full py-[24px] bg-red-500 flex flex-col justify-between items-center">
        <div className="footerRightMenu w-[90%] sm:w-auto">
          <h1 className="fMenuTitle text-xs leading-3 sm:w-full sm:text-lg -tracking-tighter">Subscribe to our newsletter</h1>
          <div className="fMenuMail mt-1 sm:mt-0">
            <input type="text" placeholder='your@email.com' className='fMenuInput px-1 sm:p-[5px] outline-none w-[100%] sm:w-auto'/>
            <button className='fMenuButton sm:ms-1 sm:p-[5px] text-[12px] sm:text-[16px] bg-black text-white hover:border hover:border-black hover:text-black hover:bg-transparent hover:font-semibold block sm:inline-block w-full sm:w-auto'>Join !</button>
          </div>
        </div>
        <div className="footerRightMenu flex my-2 sm:my-5 w-[90%] sm:w-auto">
          <h1 className="fMenuTitle text-xs sm:text-xl">Follow Us</h1>
          <div className="fIcons sm:ms-[30px]">
          <i className="ri-facebook-circle-line me-2 text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
          <i className="ri-twitter-x-line me-2 text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
          <i className="ri-instagram-line me-2 text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
          <i className="ri-whatsapp-line text-sm sm:text-2xl cursor-pointer hover:text-[18px] sm:hover:text-[28px]"></i>
          </div>
        </div>
        <div className="footerRightMenu w-[90%] sm:w-auto hidden sm:inline-block">
          <span className="copyRight text-[10px] sm:text-[16px]"><i className="ri-at-line"></i>AmanKr. All rights reserved, 2024.</span>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Footer