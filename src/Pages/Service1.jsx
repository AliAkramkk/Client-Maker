import React from 'react'
import Navbar from '../Components/Navbar/Navbar';

const Service1 = () => {
    const backgroundColorStyle = {
        backgroundColor: `rgb(234, 239, 177)`,
       
      };
  return (
    <div className=''  style={backgroundColorStyle}>
        <Navbar  />
        <div className='bg-blue-50 m-4 mt-20 w-96 h-36 flex justify-items-center align-middle' style={{ width: '70%' }}>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        <div className='bg-blue-100 m-4'>item1</div>
        
    </div>
  )
}

export default Service1