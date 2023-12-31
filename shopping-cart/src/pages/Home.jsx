import { useEffect, useState } from "react";
import Spinner from '../components/Spinner';
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL)
      const data = await res.json();

      setPosts(data);


    }catch(e){
      console.log(e)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
  <div>
    {
      loading 
      ? (<Spinner></Spinner>) 
      : posts?.map((post) => {
        return <Product post={post} key={post.id}></Product>
      })
    }
  </div>
  );
};

export default Home;
