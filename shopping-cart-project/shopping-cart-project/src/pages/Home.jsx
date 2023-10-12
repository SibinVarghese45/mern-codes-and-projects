import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../components/Product'
import Loading from '../components/Loading';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    
    async function fetchData(){
        setloading(true)
        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            setproducts(data);
        }
        catch(e){
            console.log(e)
        }
        setloading(false);
    }
    console.log(products)
    
    useEffect(() => {
        fetchData();
    }, [])

  return (
    <div className='product-data'>
      {
        loading
        ? (
            <div>
                <Loading></Loading>
            </div>
        )
        : (
            products.map((product) => {
                return <Product key={product.id} product={product}></Product>
            })
        )
      }
    </div>
  )
}

export default Home;
