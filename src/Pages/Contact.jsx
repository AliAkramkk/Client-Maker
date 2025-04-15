import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import WhatsappButton from '../Components/WhatsappButton';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.phone.trim() === '' || formData.details.trim() === '') {
      toast.error('Please fill all fields');
      return;
    }
    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(formData.phone.trim())) {
      toast.error('Please enter a valid phone number');
      return;
    }
    const whatsappNumber = '971562630333'; 
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDetails: ${formData.details}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    toast.success('Our Team will contact you soon');
    setFormData({
      name: '',
      email: '',
      phone: '',
      details: ''
    });
  };

  return (
    <>
      <Navbar />
    <div className="bg-gray-100 p-8">
      <ToastContainer />
      <div className="container my-16 mx-auto px-6">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black p-8 shadow-lg rounded-lg text-white"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-lg">Our friendly team is always here to chat.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
            <ContactInfo
              icon={<EmailIcon />}
              title="Email"
              content="hi@theclientsmaker.com"
            />
            {/* <ContactInfo
              icon={<OfficeIcon />}
              title="Office"
              content="301 City Centre, Oud Metha, Dubai"
            /> */}
            <ContactInfo
              icon={<PhoneIcon />}
              title="Phone"
              content="9895710888"
            />
            <ContactInfo
              icon={<OfficeIcon />}
              title="Office"
              content="Koppam Arcade,Koppam, Palakkad, Kerala, India"
            />
          </div>
        </motion.section>
      </div>
      <div className="container my-16 mx-auto px-6">
        <div className="flex flex-wrap justify-center">
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 lg:w-5/12 p-4"
          >
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <form onSubmit={handleSubmit}>
                <ContactInputBox type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <ContactInputBox type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                <ContactInputBox type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
                <ContactTextArea rows="6" placeholder="Your Message" name="details" value={formData.details} onChange={handleChange} />
                <div className="mt-4">
                  <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">Send Message</button>
                </div>
              </form>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 lg:w-5/12 p-4 mt-8 md:mt-0"
          >
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold">What Sets Us Apart</h2>
              <p className="mt-4">
                <span className="font-bold text-purple-600">Strategic Approach:</span> We don't believe in one-size-fits-all solutions. Our team of experienced digital marketing professionals takes a strategic approach, analyzing your business, industry, and target audience to develop customized strategies that deliver results.
              </p>
              <p className="mt-4">
                <span className="font-bold text-purple-600">Innovative Solutions:</span> In the ever-evolving world of digital marketing, staying ahead of the curve is crucial. That's why we're constantly exploring new technologies and innovative techniques to keep your brand at the forefront of your industry.
              </p>
              <p className="mt-4">
                <span className="font-bold text-purple-600">Transparency and Communication:</span> We believe in transparency and open communication every step of the way. You'll have full visibility into our process, with regular updates and reports to track the progress of your campaigns.
              </p>
              <h2 className="mt-8 text-xl font-semibold">Get Started Today</h2>
              <p className="mt-4">
                Ready to take your digital marketing to the next level? Contact us today to schedule a consultation and discover how <span className="font-bold text-purple-600">theclientsmaker</span><span className="text-red-600 font-bold">.com</span> can help you achieve your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
     <WhatsappButton />
    </div>
    </>
  );
};

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="inline-block p-3 bg-purple-100 rounded-full text-purple-600">
        {icon}
      </span>
      <div className="ml-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="mt-1">{content}</p>
      </div>
    </div>
  );
};

const ContactTextArea = ({ rows, placeholder, name, value, onChange }) => {
  return (
    <div className="mt-4">
      <textarea
        rows={rows}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full resize-none rounded-lg border border-gray-300 p-3 text-base outline-none focus:border-purple-600"
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className="mt-4">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 p-3 text-base outline-none focus:border-purple-600"
      />
    </div>
  );
};

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export default Contact;
