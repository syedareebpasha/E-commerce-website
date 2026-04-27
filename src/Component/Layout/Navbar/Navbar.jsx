import React from 'react'
import { GoHeartFill } from 'react-icons/go'
import { IoIosSearch } from "react-icons/io"
import { RiShoppingBag4Fill } from "react-icons/ri"

const Navbar = ({ handlescroll, isscrolled, handlepanel, totalitems, wishlistcount }) => {
  return (
    <div>
      <header className={`bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-[99] border-b border-blue-50 transition-all duration-300 ${isscrolled ? 'shadow-[0_4px_24px_rgba(37,99,235,0.08)]' : ''}`}>
        <nav className='h-[14vh] flex items-center justify-between max-w-[1200px] mx-auto px-12'>
          
          {/* Logo */}
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path opacity=".4" d="M16.49 22H7.51C4 22 3.24 19.99 3.53 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.75 6.25.15 1.25.03.24c.21 2.35-.61 4.23-4.01 4.23Z" fill="#000"/>
              <path d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75ZM20.5 17.771c-.03.01-.06.01-.09.01H8a.749.749 0 1 1 0-1.5h12.32l.15 1.25.03.24Z" fill="blue"/>
            </svg>
          </a>

          {/* Right side */}
          <div className='flex items-center gap-x-4'>
            {/* Search */}
            <div className='flex items-center border-[1.5px] border-blue-200 rounded-full overflow-hidden bg-[#f0f4ff] focus-within:border-blue-500 transition-all duration-200'>
              <input
                type="text"
                placeholder='Search...'
                autoComplete='off'
                className='h-[42px] pl-5 pr-2 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none w-[200px]'
                onFocus={handlescroll}
              />
              <button className='w-10 h-10 rounded-full bg-blue-600 text-white text-lg flex justify-center items-center mx-0.5 hover:bg-blue-700 transition-colors'>
                <IoIosSearch />
              </button>
            </div>

            {/* Wishlist Icon */}
            <button
              className='w-10 h-10 rounded-full bg-[#f0f4ff] border border-blue-100 text-slate-600 flex items-center justify-center text-lg relative cursor-pointer hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all duration-200'
              onClick={() => handlepanel('wishlist')}
            >
              <GoHeartFill />
              {/* ✅ Fixed: dynamic wishlist count */}
              {wishlistcount > 0 && (
                <span className='bg-red-500 text-white h-[18px] w-[18px] rounded-full text-[10px] font-bold flex justify-center items-center absolute -top-1 -right-1 border-2 border-white'>
                  {wishlistcount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              className='w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg relative cursor-pointer hover:bg-blue-700 transition-all duration-200'
              onClick={() => handlepanel('cart')}
            >
              <RiShoppingBag4Fill />
              {totalitems > 0 && (
                <span className='bg-red-500 text-white h-[18px] w-[18px] rounded-full text-[10px] font-bold flex justify-center items-center absolute -top-1 -right-1 border-2 border-white'>
                  {totalitems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar