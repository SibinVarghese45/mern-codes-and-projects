import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchForm}`


const useGif = () => {
    const [gif, setGif] = useState('')
  const [loading, setLoading] = useState(false);

  const [searchForm, setSearchForm] = useState('')

  async function fetchData(){
    setLoading(true);
    // axios isiliyue use karthe json mein convert karne ki zaroorat nahi hai
    const {data} = await axios.get(searchForm ? url : randomUrl);
    
    setLoading(false);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource)
  }

  useEffect(() => {
    fetchData();
  }, []);


  
};

export default useGif;
