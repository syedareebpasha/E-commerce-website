import React from 'react'

const Wishlist = ({ activepanel, closepanel, wishlist, addtocart, removefromwishlist, clearwishlist }) => {
  return (
    <div className={`transform transition-all duration-500 ease-in-out flex flex-col bg-[#f8faff] top-0 right-0 bottom-0 left-auto z-[100] w-[420px] fixed h-[100vh] shadow-2xl border-l border-blue-100
      ${activepanel === 'wishlist' ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Header */}
      <div className='px-7 py-6 bg-white border-b border-blue-100 flex-shrink-0'>
        <h3 className='text-[22px] font-extrabold text-[#06141b] text-center tracking-tight' style={{ fontFamily: 'Syne, sans-serif' }}>
          Wishlist
        </h3>
        <p className='text-center text-[10px] font-semibold text-slate-400 tracking-[1.5px] uppercase mt-1'>
          {wishlist.length} Saved Item{wishlist.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Items */}
      <div className='flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5
        [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-blue-100 [&::-webkit-scrollbar-thumb]:rounded-full'>
        {wishlist.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full gap-3 text-slate-400'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.593c-.425-.12-9.5-5.82-9.5-11.177C2.5 6.5 5.133 4 8.275 4c1.664 0 3.18.879 3.725 1.5.545-.621 2.061-1.5 3.725-1.5C18.867 4 21.5 6.5 21.5 10.416c0 5.357-9.075 11.057-9.5 11.177Z" stroke="#cbd5e1" strokeWidth="1.5"/>
            </svg>
            <p className='text-sm font-medium'>Your wishlist is empty</p>
          </div>
        ) : (
          wishlist.map((product, index) => (
            <div key={index} className='bg-white border border-blue-100 rounded-2xl p-3 flex items-center gap-3'>
              {/* Image */}
              <div className='w-16 h-16 bg-[#f0f4ff] rounded-xl flex items-center justify-center flex-shrink-0 p-2 overflow-hidden'>
                <img src={product.image} alt='' className='max-w-full max-h-full object-contain' />
              </div>
              {/* Detail */}
              <div className='flex-1 min-w-0'>
                <div className='flex justify-between items-start gap-2 mb-1.5'>
                  <h4 className='text-[12px] font-semibold text-[#06141b] leading-snug line-clamp-2 flex-1'>
                    {product.title}
                  </h4>
                  {/* Remove button */}
                  <button
                    className='w-[26px] h-[26px] rounded-[8px] bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-red-100 transition-colors'
                    onClick={() => removefromwishlist(product)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82ZM19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z" fill="#ef4444"/>
                    </svg>
                  </button>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-blue-600 font-extrabold text-[15px]' style={{ fontFamily: 'Syne, sans-serif' }}>
                    ${product.price}
                  </span>
                  <button
                    className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-[11px] px-3 py-1.5 rounded-lg font-semibold tracking-wide uppercase transition-colors duration-200 cursor-pointer'
                    onClick={() => addtocart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className='flex gap-2.5 px-5 py-4 bg-white border-t border-blue-100 flex-shrink-0'>
        <button
          onClick={closepanel}
          className='flex-1 h-11 rounded-xl text-[12.5px] font-semibold tracking-wide uppercase bg-[#f0f4ff] text-blue-600 border-[1.5px] border-blue-100 cursor-pointer hover:bg-blue-100 transition-all'
        >
          Close
        </button>
        <button
          onClick={clearwishlist}
          disabled={wishlist.length === 0}
          className={`flex-1 h-11 rounded-xl text-[12.5px] font-semibold tracking-wide uppercase text-white transition-all
            ${wishlist.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 active:bg-red-700 cursor-pointer'}`}
        >
          Clear All
        </button>
      </div>
    </div>
  )
}

export default Wishlist