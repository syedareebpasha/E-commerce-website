import React, { useState } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { IoIosSearch } from "react-icons/io"
import { RiShoppingBag4Fill } from "react-icons/ri"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const Navbar = ({ handlescroll, isscrolled, handlepanel, totalitems, wishlistcount }) => {
  const [mobileopen, setmobileopen] = useState(false)
  const [searchopen, setsearchopen] = useState(false)

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-500
        ${isscrolled
          ? 'bg-[#0a2e1f]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'bg-[#0a2e1f]'
        }`}
      >
        {/* Top accent bar */}
        <div className='h-[3px] bg-gradient-to-r from-[#0a2e1f] via-[#d4a843] to-[#0a2e1f]' />

        <nav className='h-[72px] flex items-center justify-between max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12'>

          {/* Logo */}
          <a href="" className='flex items-center gap-2.5 group flex-shrink-0'>
            <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8892e] flex items-center justify-center shadow-[0_4px_14px_rgba(212,168,67,0.4)] group-hover:shadow-[0_4px_20px_rgba(212,168,67,0.6)] transition-all duration-300'>
              <RiShoppingBag4Fill className='text-[#0a2e1f] text-lg' />
            </div>
            <span className='text-white font-black text-xl tracking-tight hidden sm:block' style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              LUXE<span className='text-[#d4a843]'>CART</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className='hidden md:flex items-center gap-6'>
            {['Home', 'Shop', 'Sale', 'About'].map(link => (
              <a key={link} href=""
                className='text-[#b8c9be] text-[13px] font-semibold tracking-widest uppercase hover:text-[#d4a843] transition-colors duration-200 relative group'
              >
                {link}
                <span className='absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#d4a843] group-hover:w-full transition-all duration-300' />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className='flex items-center gap-2 sm:gap-3'>

            {/* Desktop Search */}
            <div className={`hidden sm:flex items-center border border-white/10 rounded-full overflow-hidden bg-white/5 focus-within:border-[#d4a843]/50 focus-within:bg-white/8 transition-all duration-300 ${searchopen ? 'w-[180px] lg:w-[220px]' : 'w-[42px]'}`}>
              <button
                className='w-10 h-10 flex-shrink-0 text-[#d4a843] text-lg flex justify-center items-center'
                onClick={() => setsearchopen(!searchopen)}
              >
                <IoIosSearch />
              </button>
              {searchopen && (
                <input
                  type="text"
                  placeholder='Search products...'
                  autoComplete='off'
                  autoFocus
                  className='h-10 pr-4 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none w-full'
                  onFocus={handlescroll}
                />
              )}
            </div>

            {/* Mobile Search */}
            <button
              className='sm:hidden w-9 h-9 rounded-full bg-white/8 border border-white/10 text-[#d4a843] flex items-center justify-center text-lg'
              onClick={handlescroll}
            >
              <IoIosSearch />
            </button>

            {/* Wishlist */}
            <button
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center justify-center text-base sm:text-lg relative cursor-pointer hover:bg-rose-500/15 hover:text-rose-400 hover:border-rose-500/30 transition-all duration-200 group'
              onClick={() => handlepanel('wishlist')}
            >
              <GoHeartFill className='group-hover:scale-110 transition-transform duration-200' />
              {wishlistcount > 0 && (
                <span className='bg-rose-500 text-white h-[17px] w-[17px] sm:h-[18px] sm:w-[18px] rounded-full text-[9px] sm:text-[10px] font-bold flex justify-center items-center absolute -top-1 -right-1 border-2 border-[#0a2e1f] shadow-lg'>
                  {wishlistcount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              className='flex items-center gap-2 h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-gradient-to-r from-[#d4a843] to-[#b8892e] text-[#0a2e1f] font-bold text-sm relative cursor-pointer hover:from-[#e0b550] hover:to-[#c49535] shadow-[0_4px_14px_rgba(212,168,67,0.3)] hover:shadow-[0_4px_20px_rgba(212,168,67,0.5)] transition-all duration-200 active:scale-95'
              onClick={() => handlepanel('cart')}
            >
              <RiShoppingBag4Fill className='text-base sm:text-lg flex-shrink-0' />
              <span className='hidden sm:block text-[12px] font-black tracking-wide'>Cart</span>
              {totalitems > 0 && (
                <span className='bg-[#0a2e1f] text-[#d4a843] h-[18px] min-w-[18px] px-1 rounded-full text-[10px] font-black flex justify-center items-center'>
                  {totalitems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className='md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center text-lg ml-1'
              onClick={() => setmobileopen(!mobileopen)}
            >
              {mobileopen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/5
          ${mobileopen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className='px-6 py-4 flex flex-col gap-1 bg-[#071f15]'>
            {['Home', 'Shop', 'Sale', 'About'].map(link => (
              <a key={link} href=""
                className='text-[#b8c9be] text-[13px] font-semibold tracking-widest uppercase py-3 border-b border-white/5 hover:text-[#d4a843] hover:pl-2 transition-all duration-200'
                onClick={() => setmobileopen(false)}
              >
                {link}
              </a>
            ))}
            {/* Mobile Search */}
            <div className='flex items-center border border-white/10 rounded-full overflow-hidden bg-white/5 mt-3 mb-1'>
              <IoIosSearch className='text-[#d4a843] text-xl ml-4 flex-shrink-0' />
              <input
                type="text"
                placeholder='Search products...'
                autoComplete='off'
                className='h-10 px-3 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none w-full'
                onFocus={() => { handlescroll(); setmobileopen(false) }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className='h-[75px]' />
    </>
  )
}

export default Navbar