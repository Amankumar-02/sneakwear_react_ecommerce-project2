import { NavLink } from 'react-router-dom';

function Cancel() {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-[100vh] bg-gradient-to-b from-gray-900 to-red-500 px-4'>
      <h1 className='text-3xl pb-6 italic text-white text-center'>Your Payment is Cancelled</h1>
      <h1 className='text-3xl pb-6 italic text-white text-center'>Return to Home</h1>
      <NavLink to="/">
        <button className='text-xl bg-black px-4 py-2 rounded-xl hover:bg-transparent text-red-500 hover:border-4 hover:border-white hover:text-white hover:font-semibold'>Home</button>
      </NavLink>
    </div>
    </>
  )
}

export default Cancel