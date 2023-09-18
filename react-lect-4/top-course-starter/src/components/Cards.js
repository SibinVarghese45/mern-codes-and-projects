import React from 'react'
import Card from './Card'


const Cards = ({courses}) => {

    let allCOurses = [];

    function getCourses(){
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => [
                allCOurses.push(course)
            ])
        })
        return allCOurses;
        //console.log(allCOurses)

    }



    
    

  return (
    <div>
      { getCourses().map((course) => { return <Card course={course}/> }) }
    </div>
  )
}

export default Cards
