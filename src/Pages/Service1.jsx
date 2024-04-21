import React from 'react'
import Navbar from '../Components/Navbar/Navbar';

const Service1 = () => {
    const backgroundColorStyle = {
        backgroundColor: `rgb(234, 239, 177)`,
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        paddingTop: '50px' // Adjust this value as needed
      };
    
      const blue50Style = {
        width: '70%',
        marginTop: '20px' // Adjust this value as needed
      };
    
      return (
        <div className='' style={backgroundColorStyle}>
          <Navbar />
          <div className='bg-blue-50 m-4 mt-20 w-96 h-36 flex justify-center' style={blue50Style}>item1</div>
          <div className='bg-blue-100 m-4'>item1</div>
          <div className='bg-blue-100 m-4'>item1</div>
          <div className='bg-blue-100 m-4'>item1</div>
          <div className='bg-blue-100 m-4'>item1</div>
        </div>
      );
    }

export default Service1