import React, { useState, useEffect } from 'react'
import { GoHeartFill } from 'react-icons/go'

const Products = ({searhterm, addtocart, addtowishlist}) => {
  const categories = ['All', 'Mens', 'Womens', 'Kids', 'Accessories', 'Electronics']
  const [activetab, setactivetab] = useState('All')
  const [products, setProducts] = useState([])
  const [liked, setLiked] = useState({})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  const filtermap = {
    'All': null,
    'Mens': "men's clothing",
    'Womens': "women's clothing",
    'Kids': 'kids',
    'Accessories': 'jewelery',
    'Electronics': 'electronics',
  }



  const filteredItems = products.filter(item => {
    if (activetab === 'All') return true
    return item.category === filtermap[activetab]
}).slice(0, 12)

  return (
    <section id='product-section' className='max-w-[1200px] mx-auto px-6 py-12'>

      {/* Tabs */}
      <div className='flex gap-2 justify-center flex-wrap mb-10'>
        {categories.map(tab => (
          <button
            key={tab}
            onClick={() => setactivetab(tab)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide border-[1.5px] transition-all duration-200 cursor-pointer
              ${activetab === tab
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-500 border-blue-100 hover:border-blue-600 hover:text-blue-600'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredItems.map(product => (
          <div
            key={product.id}
            className='bg-white rounded-2xl border border-blue-100 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
          >
            <div className='relative h-48 bg-[#f0f4ff] flex items-center justify-center p-4 overflow-hidden'>
              <img
                src={product.image}
                alt={product.title}
                className='max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105'
              />

              <span className='absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase'>
                Sale
              </span>

<button
  onClick={() => {
    const alreadyLiked = liked[product.id]
    if (!alreadyLiked) {
      addtowishlist(product)
    }
    setLiked(liked => ({ ...liked, [product.id]: !alreadyLiked }))
  }}
  className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-sm transition-all duration-200
    ${liked[product.id] ? 'text-red-500 border-red-200 scale-110' : 'text-slate-300 hover:text-red-400'}`}
>
  <GoHeartFill />
</button>
            </div>

            <div className='p-4'>
              <p className='text-[10px] font-bold tracking-[1.5px] uppercase text-slate-400 mb-1'>
                {product.category}
              </p>

              <h3 className='text-[13px] font-bold text-slate-800 leading-snug mb-2 line-clamp-2 h-[2.5rem]'>
                {product.title}
              </h3>

              <div className='flex items-center gap-2 mb-3'>
                <span className='text-blue-600 font-extrabold text-base'>${product.price}</span>
                <span className='text-slate-300 text-xs line-through'>${Math.round(product.price * 1.4)}</span>
              </div>

              <button className='w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-[11px] font-semibold tracking-wide uppercase rounded-lg transition-colors duration-200 cursor-pointer' onClick={()=> addtocart(product)}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Products