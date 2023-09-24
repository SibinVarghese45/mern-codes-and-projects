import React from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'

const Testimonial = (props) => {
    let reviews = props.reviews;
    let [index, seTindex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){
            seTindex(reviews.length - 1);
        }
        else{
            seTindex(index - 1);
        }
    }

    function rightShiftHandler(){

        if(index + 1 >= reviews.length){
            seTindex(0);
        }
        else{
            seTindex(index + 1);
        }
        
    }

    function surpriseHandler(){

        let randomIndex = Math.floor(Math.random() * reviews.length)
        seTindex(randomIndex)
    }

  return (

    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow-lg">
      <Card review = {reviews[index]}></Card>

      <div className="flex justify-center items-center mx-auto text-3xl mt-5 gap-3 text-violet-400 font-bold">
        <button onClick={leftShiftHandler}  >
            <FiChevronLeft/>
        </button>
        <button onClick={rightShiftHandler}>
            <FiChevronRight/>
        </button>
      </div>

      <div>
        <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg ">Surprise Me</button>
      </div>

    </div>
  )
}

export default Testimonial;