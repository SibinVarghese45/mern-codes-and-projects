import React from 'react'
import { useSelector } from 'react-redux'
import {add, remove} from '../redux/slices/CartSlice';
import CartProduct from '../components/CartProduct'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CartPage = () => {

  const {cart} = useSelector((state) => state)
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    settotalPrice(cart.reduce( (acc, curr) => acc + curr.price, 0))
}, [cart])

  return (
    <div>
      {
        cart.length > 0 
        ? 
              <div>
                {
                  cart.map((cartItem) => {
                    return <CartProduct id={cartItem.id} cartItem={cartItem}></CartProduct>
                  })
                }
                
                <div className='total-price'>
                    <p>{totalPrice}</p>
                </div>
              </div>
              
        
        : (
          <div>
            <h1>No Products Available</h1>
            <NavLink to='/'>
              Go To SHop
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default CartPage
