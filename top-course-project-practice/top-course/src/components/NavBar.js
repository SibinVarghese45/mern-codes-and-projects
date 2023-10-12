import React from 'react'

const NavBar = ({filterData}) => {
    // console.log(filterData)
  return (
    <div className='nav-contents'>
      {
        filterData.map((data) => {
                return <ul key={data.id}> <li key={data.id}>{data.title}</li> </ul>
        })
      }
    </div>
  )
}

export default NavBar;
