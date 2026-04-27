import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { RiShoppingBag4Fill } from 'react-icons/ri'

const Cart = ({ activepanel, closepanel, cart, removeitem, quantityincrement, quantitydecrement, subtotal, shippingfee, ordertotal, setordersummary }) => {
  return (
    <div className={`flex flex-col justify-between bg-[#071f15] top-0 right-0 bottom-0 left-auto z-[100] w-[400px] fixed h-[100vh] transform transition-transform duration-500 ease-in-out border-l border-white/10
      ${activepanel === 'cart' ? 'translate-x-0' : 'translate-x-full'}`}
    >

      <div className='h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent flex-shrink-0' />

      {/* Header */}
      <div className='px-6 py-5 border-b border-white/8 flex-shrink-0 bg-[#0a2e1f]'>
        <div className='flex items-center justify-center gap-2.5'>
          <div className='w-8 h-8 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8892e] flex items-center justify-center shadow-[0_4px_12px_rgba(212,168,67,0.35)]'>
            <RiShoppingBag4Fill className='text-[#0a2e1f] text-sm' />
          </div>
          <h3 className='text-xl font-black text-white tracking-tight' style={{ fontFamily: 'Georgia, serif' }}>
            Your Cart
          </h3>
        </div>
        <p className='text-center text-[10px] font-bold text-white/30 tracking-[2px] uppercase mt-1.5'>
          {cart.length} Item{cart.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Cart Items */}
      <div className='flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2.5
        [&::-webkit-scrollbar]:w-[3px]
        [&::-webkit-scrollbar-thumb]:bg-[#d4a843]/30
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-track]:bg-transparent'>

        {cart.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full gap-3'>
            <div className='w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>
              <RiShoppingBag4Fill className='text-white/20 text-2xl' />
            </div>
            <p className='text-white/30 text-sm font-semibold tracking-wide'>Your cart is empty</p>
          </div>
        ) : (
          cart.map((product, index) => (
            <div key={index} className='bg-white/5 border border-white/8 rounded-2xl p-3 flex items-center gap-3 hover:bg-white/8 hover:border-[#d4a843]/20 transition-all duration-200'>

              {/* Image */}
              <div className='w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2 overflow-hidden'>
                <img src={product.image} alt='' className='max-w-full max-h-full object-contain' />
              </div>

              {/* Detail */}
              <div className='flex-1 min-w-0'>
                <div className='flex justify-between items-start gap-2 mb-2'>
                  <h4 className='text-[12px] font-semibold text-white/85 leading-snug line-clamp-2 flex-1'>
                    {product.title}
                  </h4>
                  {/* Remove button */}
                  <button
                    className='w-[26px] h-[26px] rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-red-500/25 hover:border-red-500/40 transition-all duration-200'
                    onClick={() => removeitem(product)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82ZM19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z" fill="#f87171" />
                    </svg>
                  </button>
                </div>

                <div className='flex justify-between items-center'>
                  <span className='text-[#d4a843] font-black text-[15px]' style={{ fontFamily: 'Georgia, serif' }}>
                    ${product.price}
                  </span>
                  {/* Quantity controls */}
                  <div className='flex items-center gap-2'>
                    <button
                      className='w-6 h-6 rounded-lg bg-white/8 border border-white/10 text-white/60 flex items-center justify-center text-[9px] cursor-pointer hover:bg-[#d4a843] hover:text-[#0a2e1f] hover:border-[#d4a843] transition-all duration-200'
                      onClick={() => quantitydecrement(product)}
                    >
                      <FaMinus />
                    </button>
                    <span className='text-[13px] font-black text-white w-5 text-center tabular-nums'>
                      {product.quantity}
                    </span>
                    <button
                      className='w-6 h-6 rounded-lg bg-white/8 border border-white/10 text-white/60 flex items-center justify-center text-[9px] cursor-pointer hover:bg-[#d4a843] hover:text-[#0a2e1f] hover:border-[#d4a843] transition-all duration-200'
                      onClick={() => quantityincrement(product)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className='px-5 py-4 bg-[#0a2e1f] border-t border-white/8 flex-shrink-0'>
        <div className='flex justify-between py-1.5 text-[12.5px] text-white/40'>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className='flex justify-between py-1.5 text-[12.5px] text-white/40'>
          <span>Shipping & Handling</span>
          <span>${shippingfee.toFixed(2)}</span>
        </div>
        <div className='flex justify-between pt-3 mt-1 border-t border-white/8'>
          <span className='text-[#d4a843] font-black text-[15px]' style={{ fontFamily: 'Georgia, serif' }}>
            Order Total
          </span>
          <span className='text-[#d4a843] font-black text-[15px]' style={{ fontFamily: 'Georgia, serif' }}>
            ${ordertotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className='flex gap-2.5 px-5 py-4 bg-[#0a2e1f] border-t border-white/8 flex-shrink-0'>
        <button
          onClick={closepanel}
          className='flex-1 h-11 rounded-xl text-[12px] font-bold tracking-widest uppercase bg-white/5 text-white/60 border border-white/10 cursor-pointer hover:bg-white/10 hover:text-white transition-all duration-200'
        >
          Close
        </button>
        <button
          disabled={cart.length === 0}
          onClick={() => setordersummary(true)}
          className={`flex-1 h-11 rounded-xl text-[12px] font-black tracking-widest uppercase transition-all duration-200
            ${cart.length === 0
              ? 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#d4a843] to-[#b8892e] text-[#0a2e1f] cursor-pointer hover:from-[#e0b550] hover:to-[#c49535] shadow-[0_4px_16px_rgba(212,168,67,0.3)] hover:shadow-[0_4px_24px_rgba(212,168,67,0.5)] active:scale-[0.98]'
            }`}
        >
          Checkout →
        </button>
      </div>

    </div>
  )
}

export default Cart