import React from 'react'
import Marquee from "react-fast-marquee"; 
const Quotes = () => {
    const quotes = [
        "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity. - Peter Drucker",
        "Opportunities don't happen, you create them. - Chris Grosser",
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
      ];
    
      return (
        <Marquee>
      {quotes.map((quote, index) => (
       <div key={index} style={index % 2 === 0 ? { fontSize: '16px', marginRight: '20px', color: '#333', fontWeight: 'normal' } : { fontSize: '20px', marginRight: '50px', color: '#555', fontWeight: 'bold', }}>
          {quote}
        </div>
      ))}
    </Marquee>
  );
};


export default Quotes