import React, { useState, useEffect } from 'react'
import { GoHeartFill } from 'react-icons/go'

const Products = ({ searhterm, addtocart, addtowishlist }) => {
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
    <section id='product-section' className='bg-[#f8f6f0] min-h-screen'>
      <div className='max-w-[1200px] mx-auto px-6 py-14'>

        {/* Section heading */}
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 bg-[#0a2e1f]/8 border border-[#0a2e1f]/15 rounded-full px-4 py-1.5 mb-4'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#d4a843]' />
            <span className='text-[10px] font-bold text-[#0a2e1f] tracking-[2px] uppercase'>New Collection</span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-black text-[#0a2e1f] tracking-tight' style={{ fontFamily: 'Georgia, serif' }}>
            Featured Products
          </h2>
          <div className='w-16 h-[3px] bg-gradient-to-r from-[#d4a843] to-[#b8892e] mx-auto mt-3 rounded-full' />
        </div>

        {/* Category Tabs */}
        <div className='flex gap-2 justify-center flex-wrap mb-10'>
          {categories.map(tab => (
            <button
              key={tab}
              onClick={() => setactivetab(tab)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase border transition-all duration-200 cursor-pointer
                ${activetab === tab
                  ? 'bg-[#0a2e1f] text-[#d4a843] border-[#0a2e1f] shadow-[0_4px_14px_rgba(10,46,31,0.2)]'
                  : 'bg-white text-[#0a2e1f]/60 border-[#0a2e1f]/15 hover:border-[#d4a843] hover:text-[#0a2e1f] hover:bg-[#d4a843]/8'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredItems.map(product => (
            <div
              key={product.id}
              className='bg-white rounded-2xl border border-[#0a2e1f]/8 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(10,46,31,0.12)] hover:border-[#d4a843]/40'
            >
              {/* Image area */}
              <div className='relative h-48 bg-[#f0ece0] flex items-center justify-center p-4 overflow-hidden'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105'
                />

                {/* Sale badge */}
                <span className='absolute top-2.5 left-2.5 bg-[#0a2e1f] text-[#d4a843] text-[9px] font-black tracking-[1.5px] px-2.5 py-1 rounded-full uppercase'>
                  Sale
                </span>

                {/* Wishlist heart */}
                <button
                  onClick={() => {
                    const alreadyLiked = liked[product.id]
                    if (!alreadyLiked) addtowishlist(product)
                    setLiked(prev => ({ ...prev, [product.id]: !alreadyLiked }))
                  }}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full border flex items-center justify-center text-sm transition-all duration-200 cursor-pointer
                    ${liked[product.id]
                      ? 'bg-rose-500 border-rose-500 text-white scale-110 shadow-[0_4px_12px_rgba(244,63,94,0.4)]'
                      : 'bg-white border-[#0a2e1f]/10 text-[#0a2e1f]/25 hover:text-rose-400 hover:border-rose-200 hover:bg-rose-50'
                    }`}
                >
                  <GoHeartFill />
                </button>
              </div>

              {/* Product info */}
              <div className='p-4'>
                <p className='text-[9px] font-black tracking-[2px] uppercase text-[#d4a843] mb-1'>
                  {product.category}
                </p>

                <h3 className='text-[12.5px] font-semibold text-[#0a2e1f] leading-snug mb-2.5 line-clamp-2 h-[2.5rem]'>
                  {product.title}
                </h3>

                <div className='flex items-center gap-2 mb-3.5'>
                  <span className='text-[#0a2e1f] font-black text-[15px]' style={{ fontFamily: 'Georgia, serif' }}>
                    ${product.price}
                  </span>
                  <span className='text-[#0a2e1f]/25 text-xs line-through'>
                    ${Math.round(product.price * 1.4)}
                  </span>
                  <span className='ml-auto text-[9px] font-black text-[#0a2e1f]/40 bg-[#d4a843]/15 px-2 py-0.5 rounded-full tracking-wide'>
                    -29%
                  </span>
                </div>

                <button
                  className='w-full py-2.5 bg-[#0a2e1f] hover:bg-[#0d3d28] active:scale-[0.98] text-[#d4a843] text-[10px] font-black tracking-widest uppercase rounded-xl transition-all duration-200 cursor-pointer shadow-[0_4px_12px_rgba(10,46,31,0.15)] hover:shadow-[0_4px_18px_rgba(10,46,31,0.25)]'
                  onClick={() => addtocart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className='flex flex-col items-center justify-center py-24 gap-4'>
            <div className='w-16 h-16 rounded-2xl bg-[#0a2e1f]/8 border border-[#0a2e1f]/10 flex items-center justify-center'>
              <span className='text-2xl opacity-30'>🛍️</span>
            </div>
            <p className='text-[#0a2e1f]/40 font-semibold tracking-wide text-sm'>No products in this category</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default Products