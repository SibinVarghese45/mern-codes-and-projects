import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import { apiUrl, filterData } from "./data";

const App = () => {

  const [courses, setCourses] = useState("");

  const fetchData = async() => {
    try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        //console.log(output)
        // save data in varaiable
        setCourses(output.data)
        

    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  })

  
  return(
    <div>
      <NavBar></NavBar>
      <Filter filterData={filterData}></Filter>
      <Cards courses={courses}></Cards>
    </div>
    
  )
};

export default App;
