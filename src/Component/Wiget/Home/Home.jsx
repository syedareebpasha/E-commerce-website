import React, { useEffect } from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import Banner from './../Banner/Banner'
import Products from '../Products/Products'
import { useState } from 'react'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import Orderplace from '../Order_place/orderplace'
import OrderSummary from '../Order_Summary/Ordersummary'

const Home = () => {
  const [cart, setcart] = useState(() => {
    const storecart = localStorage.getItem('cart')
    return storecart ? JSON.parse(storecart) : []
  })
  const [activepanel, setactivepanel] = useState(null)
  const [isscrolled, setisscrolled] = useState(false)
  const [ordersummary, setordersummary] = useState(false)
  const [orderplaced, setorderplaced] = useState(false)

  const [wishlist, setwishlist] = useState(() => {
    const storewishlist = localStorage.getItem('wishlist')
    return storewishlist ? JSON.parse(storewishlist) : []
  })

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalitems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const shippingfee = totalitems * 2
  const ordertotal = subtotal + shippingfee

  useEffect(() => {
    const changenavbar = () => setisscrolled(window.scrollY > 10)
    window.addEventListener('scroll', changenavbar)
    return () => window.removeEventListener('scroll', changenavbar)
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [cart, wishlist])

  const [searchterm, setsearchterm] = useState('')

  const handlescroll = () => {
    const section = document.getElementById('product-section')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  const handlepanel = (tabname) => {
    setactivepanel(prev => (prev === tabname ? null : tabname))
  }

  const closepanel = () => setactivepanel(null)

  const removeitem = (product) => {
    setcart(cart.filter(item => item.id !== product.id))
  }

  const quantityincrement = (product) => {
    setcart(prev => prev.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const quantitydecrement = (product) => {
    setcart(prev => prev.map(item =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

  const addtocart = (product) => {
    const alreadyadded = cart.find(item => item.id === product.id)
    if (alreadyadded) { alert('Item is already in the cart'); return }
    setcart([...cart, { ...product, quantity: 1 }])
  }

  const addtowishlist = (product) => {
    const alreadyadded = wishlist.find(item => item.id === product.id)
    if (alreadyadded) { alert('Item is already in wishlist'); return }
    setwishlist([...wishlist, product])
  }

  const removefromwishlist = (product) => {
    setwishlist(wishlist.filter(item => item.id !== product.id))
  }

  const clearwishlist = () => setwishlist([])

  return (
    <div>
      <Navbar
        handlescroll={handlescroll}
        isscrolled={isscrolled}
        handlepanel={handlepanel}
        totalitems={totalitems}
        wishlistcount={wishlist.length}
      />
      <Banner />
      <Products
        searchterm={searchterm}
        addtocart={addtocart}
        addtowishlist={addtowishlist}
      />

      {activepanel === 'cart' && (
        <Cart
          activepanel={activepanel}
          quantityincrement={quantityincrement}
          subtotal={subtotal}
          closepanel={closepanel}
          cart={cart}
          removeitem={removeitem}
          quantitydecrement={quantitydecrement}
          shippingfee={shippingfee}
          ordertotal={ordertotal}
          setordersummary={setordersummary}
        />
      )}

      {activepanel === 'wishlist' && (
        <Wishlist
          activepanel={activepanel}
          closepanel={closepanel}
          wishlist={wishlist}
          addtocart={addtocart}
          removefromwishlist={removefromwishlist}
          clearwishlist={clearwishlist}
        />
      )}

      {ordersummary && (
        <OrderSummary
          cart={cart}
          subtotal={subtotal}
          shippingfee={shippingfee}
          ordertotal={ordertotal}
          setorderplaced={setorderplaced}
          setordersummary={setordersummary}
          setcart={setcart}
          closepanel={closepanel}
        />
      )}

      {orderplaced && (
        <Orderplace setorderplaced={setorderplaced} />
      )}
    </div>
  )
}

export default Home