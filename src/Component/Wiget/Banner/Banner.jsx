import React from 'react'
import bannerimg from '../../../assets/banner.jpg'
const Banner = () => {
  return (
  <section className=' mt-[14vh] bg-cover bg-top h-[60vh]' style={{backgroundImage:`url(${bannerimg})`}}>
  <div className='max-w-[1200] mx-auto px-30 flex flex-col justify-center h-100 gap-3'>
    <h1 className='text-red-600 text-8xl uppercase font-bold tracking-tight '>
        Big Sale!
    </h1>
    <h2 className='text-zinc-800 text-2xl'>
        Up t0 50% OFF - Limited Time Only!
    </h2>
    <div className='text-bold text-5xl flex gap-x-3 mt-5'>
        <span className='text-white bg-zinc-800 p-3'>
            00
        </span>:
        <span className='text-white bg-zinc-800 p-3'>
            00
        </span>:
        <span className='text-white bg-zinc-800 p-3'>
            00
        </span>
    </div>
  </div>
  </section>
  )
}

export default Banner
