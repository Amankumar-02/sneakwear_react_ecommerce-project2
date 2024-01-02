import {fetchCartData} from '../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

function Card({
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
}) {
  let dispatch  = useDispatch();

  return (
    <>
    <section className="card my-[5px] mx-[2px] sm:m-[20px] border-2 border-[#ededed] p-[8px] sm:p-[20px] flex flex-col justify-end items-center w-[140px] sm:w-auto">
        <img src={img} alt={title} className='card-img w-[100%] sm:w-[13rem] mb-2 sm:mb-[1rem]'/>
        <div className="card-details">
          <h3 className="card-title mb-1 sm:mb-[1rem] text-sm sm:text-[1.17em] font-bold">{title}</h3>
          <section className="card-reviews mb-1 sm:mb-[1rem] flex items-center">
            <i className="ri-star-fill text-yellow-500 text-xs sm:text-lg"></i>
            <i className="ri-star-fill text-yellow-500 text-xs sm:text-lg"></i>
            <i className="ri-star-fill text-yellow-500 text-xs sm:text-lg"></i>
            <i className="ri-star-fill text-yellow text-xs sm:text-lg"></i>
            <i className="ri-star-fill text-yellow text-xs sm:text-lg"></i>
            <span className="total-reviews text-[8px] sm:text-lg ms-1 sm:ms-[10px]">{reviews}</span>
            </section>
            <section className="card-price flex justify-between items-center">
              <div className="price text-xs sm:text-[16px]">
                <del>{prevPrice}</del><p className='inline-block ms-2'> ${newPrice}</p> 
              </div>
              <div className="bag"><i className="ri-shopping-bag-fill text-[#535353]"></i></div>
            </section>
            <button className="border border-black p-1 mt-2 w-full hover:border-red-500 hover:text-red-500" onClick={()=>{dispatch(fetchCartData(title))}}>Add to Cart</button>
        </div>
      </section>
    </>
  )
}

export default Card