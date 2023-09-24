import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){

    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      //console.log(output.data)
      setCourses(output.data);

    }
    catch(e){
        toast.error("Network me koi dikkat hai")
    }

    setLoading(false);
  }

  useEffect(()=> {
    fetchData();
  }, [])

    return (
      <div className="min-h-screen flex flex-col">
        <div>
          <NavBar></NavBar>
        </div>

        <div className="bg-bgDark2">
          <div>
            <Filter
            id={courses.id}
            filterData={filterData}
            category={category}
            setCategory={setCategory}
              ></Filter>
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto h-auto flex flex-wrap justify-center items-start min-h-[100vh]">
            {
              loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}/>)
            }
          </div>
        </div>
        
      </div>
    )

};

export default App;