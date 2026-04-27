import React from 'react'

const orderplace = ({setorderplaced}) => {
  return (
    <section className='bg-black/95 fixed inset-0  z-[1111] flex justify-center items-center'>
      <div className='bg-zinc-100 p-8 overflow-hidden w-[400px] text-center rounded-lg border-1 border-zinc-300'>
        <h2 className='text-3xl text-green-600 font-bold'>Order Placed</h2>
        <p className='text-zinc-800 my-4'>Thanks for your purchase!</p>
        <button className='px-6 py-3 bg-blue-600 active:bg-blue-700 text-white rounded-lg cursor-pointer'
        onClick={() => setorderplaced(false)}
        >Close</button>
        </div>
    </section>
  )
}

export default orderplace
