import React, {useState} from 'react'
import authService from '../../appwrite/auth'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import './SignUp.css'

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signUpUser = async (e)=>{
    e.preventDefault();
    try {
      await authService.createAccount({email:user.email, password:user.password, name:user.name});
      console.log(`Signup SuccessFully`)
      navigate('/');
      toast.success('Successfully Signup!');
    } catch (error) {
      console.error('Sign-up failed:', error);
      toast.error(error.message);
    }
  }

  return (
    <>
      {/* old */}
      {/* <div className='h-[100vh] w-[100vw] flex flex-col bg-gradient-to-b from-gray-900 to-red-500 items-center'>
        <a href="/" className='mt-6'>
            <h1 className="text-[3rem] text-gray-300 font-semibold">Sneakwear</h1>
        </a>
        <div className='flex justify-evenly mt-6 w-[80%] h-[70vh] rounded-2xl shadow-2xl border border-red-800 overflow-hidden'>
            <div className='signinImg w-[50%] flex items-center justify-center bg-gradient-to-b from-red-300 to-red-800'>
                <img src="https://cdn.leonardo.ai/users/9a70dc76-ca32-439c-ae48-0728cf5b5211/generations/53e12c1b-f075-473c-92e3-f975b9a03c80/variations/Default_nike_sneaker_black_red_shoes_0_53e12c1b-f075-473c-92e3-f975b9a03c80_0.png" className='w-full' alt="" />
            </div>
            <div className='w-full sm:w-[50%] bg-white p-10'>
            <form className="space-y-3 mt-10 sm:mt-0" action="#" method="POST">
              <h2 className='text-xl font-semibold text-red-500 text-center'>Sign Up</h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 text-center"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 text-center"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    onChange={handleInputChange}
                    />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold text-gray-700 text-center"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a
                    href="/login"
                    className="font-semibold text-red-500 hover:text-red-600"
                  >
                    Already have Account, Sign In
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={signUpUser}
                >
                  Sign Up
                </button>
              </div>
            </form>
            </div>
        </div>
      </div> */}

      {/* new */}
      <div className='h-screen w-screen flex flex-col bg-gradient-to-b from-gray-900 to-red-500 items-center'>
        <a href='/' className='mt-6'>
          <h1 className='text-3xl text-gray-300 font-semibold'>Sneakwear</h1>
        </a>
        <div className='flex justify-evenly mt-6 h-[60vh] sm:h-auto rounded-2xl shadow-2xl border border-red-800 overflow-hidden'>
          <div className='signinImg w-1/2 flex items-center justify-center bg-gradient-to-b from-red-300 to-red-800'>
            <img
              src='https://cdn.leonardo.ai/users/9a70dc76-ca32-439c-ae48-0728cf5b5211/generations/53e12c1b-f075-473c-92e3-f975b9a03c80/variations/Default_nike_sneaker_black_red_shoes_0_53e12c1b-f075-473c-92e3-f975b9a03c80_0.png'
              className='w-full'
              alt=''
            />
          </div>
          <div className='w-full sm:w-1/2 bg-white p-10 flex'>
            <form className='space-y-3 mt-0 sm:mt-0 w-[100%]' action='#' method='POST'>
              <h2 className='text-xl font-semibold text-red-500 text-center'>Sign Up</h2>
              <div>
                <label htmlFor='name' className='block text-lg font-semibold text-gray-700 text-center'>
                  Name
                </label>
                <div className='mt-1'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    autoComplete='name'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor='email' className='block text-lg font-semibold text-gray-700 text-center'>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='block text-lg font-semibold text-gray-700 text-center'>
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='text-sm'>
                  <a href='/login' className='font-semibold text-red-500 hover:text-red-600'>
                    Already have Account, Sign In
                  </a>
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                  onClick={signUpUser}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp