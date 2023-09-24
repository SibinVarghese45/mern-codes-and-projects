import React from 'react'
import {FcLike} from "react-icons/fc";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Card = (props) => {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikeCourses = props.setLikeCourses;

    function clickHandler(){

      if(likedCourses.includes(course.id)){
        // pehle se like hua pada hai
        setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)));
        toast.warning("Like removed")
      }
      else{
        // pehle se like nahi hai
        if(likedCourses.length === 0){
          setLikeCourses([course.id]);
        }
        else{
          setLikeCourses((prev) => [...prev, course.id]);
        }

        toast.success("Liked Successfully")
      }

    }

  return (
    
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-sm overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full 
        absolute right-2 bottom-3 grid place-items-center'>
          <button onClick={clickHandler} >
                  <FcLike className='h-[20px] w-[20px]'/>
          </button> 
      </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
            (course.description.substr(0,100)+"...") : 
            (course.description)
          }
        </p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Card
