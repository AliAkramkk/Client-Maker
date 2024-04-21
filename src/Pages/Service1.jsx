import React from 'react'

const Service1 = () => {
    const backgroundColorStyle = {
        backgroundColor: `rgb(234, 239, 177)`
      };
  return (
    <div className='flex'  style={backgroundColorStyle}>
        <div className='bg-blue-100'>item1</div>
        <div className='bg-blue-100'>item1</div>
        <div className='bg-blue-100'>item1</div>
        <div className='bg-blue-100'>item1</div>
        <div className='bg-blue-100'>item1</div>
        
    </div>
  )
}

export default Service1