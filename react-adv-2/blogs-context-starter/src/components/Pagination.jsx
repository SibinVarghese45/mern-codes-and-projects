import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {page, handlePageChange, totalPages} = useContext(AppContext)
    console.log(page)
  return (
    <div className='w-11/12 max-w-[450px] flex justify-between'>
    <div className='flex gap-x-7'>
      {
        page > 1 &&
        <button className='border p-1 border-black' onClick={() => handlePageChange(page-1)}>Previous</button> 
      }
      
      {
        page < totalPages &&
        <button className='border p-1 border-black' onClick={() => handlePageChange(page+1)}>Next</button>
      }
    </div>
    <div>
      <p>Page {page} of {totalPages}</p>
    </div>
    </div>
  )
}

export default Pagination
