import React from 'react'

const Ordersummary = ({ cart, subtotal, shippingfee, ordertotal, setorderplaced, setordersummary, setcart, closepanel }) => {

  const handleplaceorder = () => {
    setordersummary(false)
    setorderplaced(true)
    setcart([])
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1111, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
      <div className='bg-[#0a2e1f] w-full max-w-[560px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]'>

        <div className='h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent' />

        {/* Header */}
        <div className='px-7 py-5 bg-[#071f15] border-b border-white/8 flex items-center gap-3'>
          <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#b8892e] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(212,168,67,0.35)]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0a2e1f">
              <path d="M3.5 6.375c0-.621.504-1.125 1.125-1.125h14.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H4.625A1.125 1.125 0 0 1 3.5 17.625V6.375Zm2.25 9h12.5M3.5 9.75h17"/>
            </svg>
          </div>
          <div>
            <h2 className='text-[18px] font-black text-white tracking-tight' style={{ fontFamily: 'Georgia, serif' }}>
              Order Summary
            </h2>
            <p className='text-[10px] font-bold text-white/30 tracking-[2px] uppercase mt-0.5'>
              {cart.length} item{cart.length !== 1 ? 's' : ''} in your order
            </p>
          </div>
        </div>

        {/* Cart Items */}
        <div className='px-7 py-4 max-h-[260px] overflow-y-auto flex flex-col gap-2
          [&::-webkit-scrollbar]:w-[3px]
          [&::-webkit-scrollbar-thumb]:bg-[#d4a843]/30
          [&::-webkit-scrollbar-thumb]:rounded-full'>
          {cart.map(item => (
            <div key={item.id} className='flex justify-between items-center py-2.5 border-b border-white/6 gap-4'>
              <div className='flex items-center gap-3 min-w-0'>
                <div className='w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1 overflow-hidden'>
                  <img src={item.image} alt='' className='max-w-full max-h-full object-contain' />
                </div>
                <span className='text-[12px] text-white/70 leading-snug line-clamp-1'>
                  {item.title}
                </span>
              </div>
              <div className='flex items-center gap-2 flex-shrink-0'>
                <span className='text-[11px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full'>
                  x{item.quantity}
                </span>
                <span className='text-[#d4a843] font-bold text-[13px]' style={{ fontFamily: 'Georgia, serif' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className='px-7 py-4 bg-[#071f15] border-t border-white/8'>
          <div className='flex justify-between py-1.5 text-[12.5px] text-white/40'>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between py-1.5 text-[12.5px] text-white/40'>
            <span>Shipping & Handling</span>
            <span>${shippingfee.toFixed(2)}</span>
          </div>
          <div className='flex justify-between pt-3 mt-1 border-t border-white/8'>
            <span className='text-[#d4a843] font-black text-[16px]' style={{ fontFamily: 'Georgia, serif' }}>
              Order Total
            </span>
            <span className='text-[#d4a843] font-black text-[16px]' style={{ fontFamily: 'Georgia, serif' }}>
              ${ordertotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-3 px-7 py-5 bg-[#0a2e1f] border-t border-white/8'>
          <button
            className='flex-1 h-11 rounded-xl text-[12px] font-bold tracking-widest uppercase bg-white/5 text-white/50 border border-white/10 cursor-pointer hover:bg-white/10 hover:text-white transition-all duration-200'
            onClick={() => setordersummary(false)}
          >
            Cancel
          </button>
          <button
            className='flex-1 h-11 rounded-xl text-[12px] font-black tracking-widest uppercase bg-gradient-to-r from-[#d4a843] to-[#b8892e] text-[#0a2e1f] cursor-pointer hover:from-[#e0b550] hover:to-[#c49535] shadow-[0_4px_16px_rgba(212,168,67,0.3)] hover:shadow-[0_4px_24px_rgba(212,168,67,0.5)] active:scale-[0.98] transition-all duration-200'
            onClick={handleplaceorder}
          >
            Place Order →
          </button>
        </div>

      </div>
    </div>
  )
}

export default Ordersummary