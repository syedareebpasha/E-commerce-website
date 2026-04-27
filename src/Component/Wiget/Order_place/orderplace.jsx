import React from 'react'

const orderplace = ({ setorderplaced }) => {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1111, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
      <div className='bg-[#0a2e1f] w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]'>

        <div className='h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent' />

        {/* Content */}
        <div className='px-8 py-10 flex flex-col items-center text-center'>

          <div className='relative mb-6'>
            <div className='w-20 h-20 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/25 flex items-center justify-center'>
              <div className='w-14 h-14 rounded-full bg-gradient-to-br from-[#d4a843] to-[#b8892e] flex items-center justify-center shadow-[0_8px_24px_rgba(212,168,67,0.4)]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#0a2e1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {/* Ping ring */}
            <div className='absolute inset-0 rounded-full border-2 border-[#d4a843]/20 animate-ping' />
          </div>

          {/* Text */}
          <h2 className='text-[26px] font-black text-white tracking-tight mb-2' style={{ fontFamily: 'Georgia, serif' }}>
            Order Placed!
          </h2>
          <div className='w-10 h-[2px] bg-gradient-to-r from-[#d4a843] to-[#b8892e] rounded-full mx-auto mb-4' />
          <p className='text-white/50 text-[13px] leading-relaxed mb-1'>
            Thank you for your purchase.
          </p>
          <p className='text-white/30 text-[12px]'>
            Your order is being processed.
          </p>

          {/* Order badge */}
          <div className='mt-5 inline-flex items-center gap-2 bg-[#d4a843]/8 border border-[#d4a843]/20 rounded-full px-4 py-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse' />
            <span className='text-[10px] font-bold text-[#d4a843] tracking-[2px] uppercase'>Processing your order</span>
          </div>
        </div>

        {/* Footer */}
        <div className='px-8 pb-7'>
          <button
            className='w-full h-12 rounded-xl text-[12px] font-black tracking-widest uppercase bg-gradient-to-r from-[#d4a843] to-[#b8892e] text-[#0a2e1f] cursor-pointer hover:from-[#e0b550] hover:to-[#c49535] shadow-[0_4px_16px_rgba(212,168,67,0.3)] hover:shadow-[0_4px_24px_rgba(212,168,67,0.5)] active:scale-[0.98] transition-all duration-200'
            onClick={() => setorderplaced(false)}
          >
            Continue Shopping →
          </button>
        </div>

      </div>
    </div>
  )
}

export default orderplace