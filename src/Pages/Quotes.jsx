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
        <Marquee autoFill pauseOnHover speed={20}>
          {quotes.map((quote, index) => (
            <span key={index} className='text-lg font-semibold m-2 px-2 py-2 text-blue-400'>{quote} </span>
          ))}
        </Marquee>
      );
    };

export default Quotes