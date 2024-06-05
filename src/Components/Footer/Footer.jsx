import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setMessage('Please enter your email address.');
      return;
    }

    emailjs.send(
      'service_mno3tno',
      'template_q0viicx',
      { email },
      '7D5QQ1Nxj2wwKLmW0'
    )
    .then((response) => {
      toast.success('Thanks! Our Team will contact you soon.');
      setEmail('');
    })
    .catch((error) => {
      toast.error('There was an error subscribing. Please try again.');
    });
  };

  return (
    <footer className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-gray-600 font-medium">
              At <span className="font-bold">The Clients Maker</span>, we specialize in transforming your digital presence. Our innovative marketing strategies and cutting-edge solutions ensure your business stays ahead of the competition. Let's create success together!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="mt-4 text-gray-600 font-medium">Make Your Buisness To Next Level</p>
            <form onSubmit={sendEmail} className="mt-4 flex">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded-r-lg"
              >
                →
              </button>
            </form>
            {message && <p className="mt-2 text-gray-600">{message}</p>}
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <p className="mt-4 text-gray-600 font-medium">Let's connect on social media</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/yourpage" className="text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.twitter.com/yourpage" className="text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/yourpage" className="text-gray-600 hover:text-gray-800">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 mt-8 pt-8">
          <div className="text-center text-gray-500">
            <p>2024 The Clients Maker, LLC. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
