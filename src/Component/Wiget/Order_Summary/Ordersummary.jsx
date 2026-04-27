import React from 'react'

const Ordersummary = ({ cart, subtotal, shippingfee, ordertotal, setorderplaced, setordersummary,setcart, closepanel }) => {
  
  const handleplaceorder = () => {
    setordersummary(false)
    setorderplaced(true)
    setcart([])
  }
  
  return (
    <section className='bg-black/95 fixed inset-0  z-[1111] flex justify-center items-center'>
      <div className='bg-zinc-100 p-8 overflow-hidden w-[600px] rounded-lg border-1 border-zinc-300'>
        <h2 className='text-3xl text-zinc-800 font-bold mb-5 text-center'>Order Summary</h2>
        <div>
          <div>
            {
              cart.map(item => (
                <div key={item.id} className="flex justify-between items-center  border-b-1 border-zinc-300">
                  <span className='text-zinc-800 py-2'>{item.title} (x{item.quantity})</span>
                  <span className='text-zinc-800 py-2'>${item.price * item.quantity.toFixed(2)}</span>
                </div>
              ))
            }
          </div>
          <div className='flex justify-between pt-3'>
            <span className='text-zinc-800'>Subtotal</span>
            <span className='text-zinc-800'>${subtotal.toFixed(2)}</span>
          </div>
          <div className='border-b-1 border-zinc-300 flex justify-between py-3'>
            <span className='text-zinc-800 '>Sipping & Handling</span>
            <span className='text-zinc-800'>${shippingfee.toFixed(2)}</span>
          </div>
          <div className='flex justify-between pt-3 border-t-1 border-zinc-300 mb-5'>
            <span className='text-blue-600 text-xl font-bold'>Order Total</span>
            <span className='text-blue-600 text-xl font-bold'>${ordertotal.toFixed(2)}</span>
          </div>
                  </div>
      <div className='flex mt-10 gap-x-3'>
        <button className='bg-zinc-800 flex-1 py-3 active:bg-zinc-900 text-white rounded-lg cursor-pointer'
      onClick={closepanel}
        >Close</button>
        <button className='bg-blue-600 flex-1 py-3 active:bg-blue-700 text-white rounded-lg cursor-pointer'
        onClick={handleplaceorder}
        >Place Order</button>
        </div>
      </div>
    </section>
  )
}

export default Ordersummary
