import 'remixicon/fonts/remixicon.css';
import {Category, Colors, Price} from './index';
import './SideBar.css';

function SideBar({handleRadioChange}) {
  return (
    <section className="sidebar absolute top-0 left-0 w-[22vw] sm:w-[20%] h-full py-2 ps-[12px] pe-[8px] sm:px-[20px] flex flex-col items-center">
        <div className='sideBar-scroll w-[100px] sm:w-[150px] whitespace-nowrap overflow-x-hidden overflow-y-auto scroll-smooth' style={{height:`calc(100vh - 100px)`}}>
        <Category handleRadioChange={handleRadioChange}/>
        <Price handleRadioChange={handleRadioChange}/>
        <Colors handleRadioChange={handleRadioChange}/>
        </div>
    </section>
  )
}

export default SideBar