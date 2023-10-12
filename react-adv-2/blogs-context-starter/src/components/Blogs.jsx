import React from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner'
import { useContext } from 'react';
import "./Blogs.css"

const Blogs = () => {
    // consume
    const {loading, posts} = useContext(AppContext);
    console.log(posts)
  return (
    <div className='w-11/12 max-w-[450px]  py-3 flex flex-col gap-y-7'>
        {
            loading 
            ? <Spinner/> 
            : posts?.map((post) => {
                // console.log(post)
                     return (
                     <div key={post.id}>
                        <p className='font-bold text-xs'>{post.title}</p>
                        <p className='text-[10px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                        <p className='text-[10px]'>Posted on {post.date}</p>
                        <p className='text-[11px] mt-[10px]'>{post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag, index) => {
                                //console.log(tag)
                                return <span className='text-blue-500 underline font-bold text-[8px]' key={index}>{`${tag}`}</span>
                            })}
                        </div>
                    </div>
            )})
        }
    </div>
  )
}

export default Blogs;
