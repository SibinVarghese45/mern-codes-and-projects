import React, { useEffect, useState } from 'react'
import {add, remove} from '../redux/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux';

const CartProduct = ({id, cartItem}) => {
    const {image, title, description, price} = cartItem;
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(remove(id))
    }


  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
            <span>{price}</span>
            <button onClick={deleteItem}>Delete Item</button>
        </div>
      </div>


    </div>
  )
}

export default CartProduct
