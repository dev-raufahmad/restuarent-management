import React , { useState } from 'react';
import { NavLink, useLocation  } from 'react-router-dom';
import LogInAndSignIn from './LogInAndSignIn.jsx'

function Header() {
  const [ dropdown , setDropdown ] = useState(false);
  console.log("The drop down is : " , dropdown);
  
  const cookies = document.cookie;
  console.log("The cookies in the header are : " , cookies);
  

  const [ signIn , setSignIn ] = useState(false);
    const [logIn , setLogIn] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const myCookie = {
    id : 1,
    name : "John Doe",
    gmail : "johndoe@example.com",
    role : "user"
  }
  

  const navClass = ({ isActive }) =>
    `transition-all duration-200 ${
      isHome
        ? 'text-white'
        : isActive
        ? 'text-[#8A6815]'
        : 'text-black opacity-80 hover:opacity-100'
    }`;

  return (
    <header
      className={`flex flex-row justify-around items-center px-10 py-5 ${
        isHome ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <LogInAndSignIn prop={ {setLogIn , setSignIn , logIn , signIn} } />
      <div className="flex flex-row space-x-8">
        <NavLink to="/" className={navClass}>
          Discover
        </NavLink>

        <NavLink to="/restaurants" className={navClass}>
          Restaurants
        </NavLink>

        <NavLink to="/my-bookings" className={navClass}>
          My Bookings
        </NavLink>
      </div>

      {!myCookie && <div
        className={`flex flex-row items-center space-x-6 ${
          isHome ? 'text-white' : 'text-black'
        }`}
      >
        <button
        onClick={() => {
          setLogIn((prev) => !prev);
          setSignIn((prev) => false);
        }}
          className={`transition-all duration-200 ${
            isHome
              ? 'text-white'
              : 'text-black opacity-80 hover:opacity-100'
          }`}
        >
          Sign In
        </button>

        <button
        onClick={() => {
          setLogIn((prev) => false);
          setSignIn((prev) => !prev);
        }}
          className={`px-6 py-3 font-semibold transition-all duration-200 ${
            isHome
              ? 'bg-white text-black hover:bg-gray-100'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          SIGN UP
        </button>
      </div>}
      {
        myCookie && 
          <div onClick={() => setDropdown(!dropdown)} className='inline-block relative w-30 h-10 space-x-3 flex flex-row justify-center items-center hover:cursor-grab' >
            { dropdown && <div className='z-10 space-y-3 text-black absolute top-full flex flex-col justify-center w-[250px] h-[200px] bg-white rounded-2xl' >
                <div className='text-black pl-5 flex flex-col gap-y-1' >
                  <h1 className='text-sm text-start font-bold' >{myCookie.name}</h1>
                  <p className='text-sm text-start' > { myCookie.gmail }</p>
                </div>
                <NavLink to='/my-bookings' className='relative w-full h-[15%] opacity-55 hover:opacity-100 transition-all duration-200' >
                    <p>My Bookings</p>
                    <img className='w-6 h-6 absolute left-2 top-[30%]' src="https://cdn-icons-png.flaticon.com/128/4812/4812872.png" alt="" />
                </NavLink>
                <NavLink to={`${ myCookie.role == 'admin' ? '/admin/dashboard' : '/restaurants' }`} className='flex flex-row justify-center items-center relative w-full h-[15%] opacity-55 hover:opacity-100 transition-all duration-200' >
                    <p className='text-center' >{ myCookie.role == 'admin' ? 'Admin Panel' : 'User Panel' }</p>
                    <img className='w-6 h-6 absolute left-2 top-[30%]' src="https://cdn-icons-png.flaticon.com/128/4812/4812872.png" alt="" />
                </NavLink>
                <button className='relative w-full h-[15%] opacity-55 hover:opacity-100 transition-all duration-200' >
                    <p className='text-red-500' >Sign out</p>
                    <img className='w-6 h-6 absolute left-2 top-[30%]' src="https://cdn-icons-png.flaticon.com/128/13247/13247834.png" alt="" />
                </button>
              </div>}
            <button className={`${ isHome ? 'text-white border-white' : 'border-yellow-800 bg-yellow-700' } hover:cursor-grab h-10 w-12 rounded-full border `} >
              {myCookie.name.charAt(0).toUpperCase()}
            </button>
            <p className={ `${ isHome ? 'text-white' : 'text-yellow-600' } text-center ` }>{ myCookie.name.split(" ")[0] }</p>
          </div>
        
      }
    </header>
  );
}

export default Header;