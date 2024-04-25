import React from 'react';
import whatsappIcon from '../assets/wats.webp';

const WhatsappButton = () => {
  return (
    <div
      className="fixed bottom-10 right-10 z-50 cursor-pointer transition-all duration-300"
      onClick={handleClick}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl  hover:bg-green-600"
      />
    </div>
  )
}

export default WhatsappButton