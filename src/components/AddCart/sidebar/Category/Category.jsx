import './Category.css';
import {categoryData} from '../../../../dataBase';

function Category({handleRadioChange}) {
  return (
    <>
      <div>
        <h2 className="sidebar-title text-md sm:text-[1.5em] font-bold mb-[8px] sm:my-[20px]">
          Category
        </h2>
        <div className="">
          {categoryData.map((data, index) => (
            <div key={index}>
              <label htmlFor={data.id} className="sidebar-label-container block relative text-xs sm:text-[16px] ps-[20px] sm:ps-[35px] mb-1 sm:mb-[12px] cursor-pointer" >
                <input onChange={handleRadioChange} type="radio" id={data.id} className="hidden" value={data.value} name="testcat" />
                <span className={`check-mark absolute top-0 left-0 h-[15px] sm:h-[20px] w-[15px] sm:w-[20px] rounded-[50%]`} ></span> {data.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category