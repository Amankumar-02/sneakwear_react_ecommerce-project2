import {buttonTitleData} from '../../../dataBase';

function Recommended({handleClick}) {
  return (
    <>
    <div className="ms-[7rem] sm:ms-[20rem] mt-3 sm:mt-4">
      <h2 className="text-sm sm:text-[1.5em] py-[4px] sm:py-[20px] font-bold">Recommended</h2>
      <div className="recommended-buttons">
        {buttonTitleData.map((data, index)=>(
          <button key={index} className="p-1 sm:px-[20px] sm:py-[10px] me-[6px] bg-transparent border border-[#ccc] rounded-md text-[#323232] text-[12px] sm:text-[16px] cursor-pointer hover:bg-gray-300 hover:text-black" onClick={handleClick} value={data.value}>{data.title}</button>
        ))}
      </div>
    </div>
    </>
  )
}

export default Recommended