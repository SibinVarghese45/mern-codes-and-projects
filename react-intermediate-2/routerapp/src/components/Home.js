import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        {/* if you want to render child routes inside parent element then we use outlet */}
        <Outlet/>
        <h1>Home Page</h1>
    </div>
  )
}

export default Home
