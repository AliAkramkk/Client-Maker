import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import "./Service1.css"
const Service1 = () => {
    const backgroundColorStyle = {
        backgroundColor: `rgb(234, 239, 177)`,
       
      };
  return (
    <div className=''  style={backgroundColorStyle}>
        <Navbar  />
        <div className='first-div  bg-blue-50 ' style={{ width: '70%' }}>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        
    </div>
  )
}

export default Service1