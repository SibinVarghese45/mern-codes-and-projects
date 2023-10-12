import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {

  const [gif, setGif] = useState('')
  const [loading, setLoading] = useState(false);

  const [searchForm, setSearchForm] = useState('')

  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchForm}`
    // axios isiliyue use karthe json mein convert karne ki zaroorat nahi hai
    const {data} = await axios.get(url)
    setLoading(false);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource)
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler(){
    fetchData();
  }

  function changeHandler(e){
    let {value} = e.target;
    setSearchForm(value);

  }

  return (
    <div className='w-1/2 mx-auto h-[450px] bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {searchForm} GIF</h1>
      
      {
        loading ? <Spinner></Spinner> : <img src={gif} width="250px" alt="" />
      }

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[20px]' type="text" onChange={changeHandler} />
      
      <button className='w-10/12 bg-yellow-500 text-lg py-2 opacity-90 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag;
