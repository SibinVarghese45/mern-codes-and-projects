import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from '../redux/slices/CartSlice'

const Product = ({loading, product}) => {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const {id, title, description, price, image} = product;

    const addToCart = () => {
        dispatch(add(product));
    }

    const removeFromCart = () => {
        dispatch(remove(id));
    }

    console.log(cart)

  return ( 
            <div>

<div>
                        <div className='pro-title-desc'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>

                        <div>
                            <img className='product-image' src={image} alt="" />
                        </div>

                        <div className='price'>
                            <span>{price}</span>
                            {
                                cart.some( (p) => p.id === product.id) ?
                                (
                                    <button 
                                        className=""
                                        onClick={removeFromCart}
                                    >
                                        Remove Item
                                    </button>
                                ) :
                                (
                                    <button
                                        className=''
                                        onClick={addToCart}
                                    >
                                        Add to Cart
                                    </button>
                                )
                    }


                        </div>
                    </div>

            </div>

    
  )
}

export default Product;
