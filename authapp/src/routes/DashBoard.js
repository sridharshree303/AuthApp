import React from 'react'
import { useLocation } from 'react-router'
import Header from '../models/Header'

const DashBoard = () => {

  const location = useLocation();

  // console.log(JSON.stringify(location.state));

  return (
    <div >
      <Header/>
      <div className='text-center mt-5' style={{"color": "#f0582a"}}>
        <h1 className='p-4'>Welcome {location.state.data.name}!</h1>
      </div>
    </div>
  )
}

export default DashBoard
