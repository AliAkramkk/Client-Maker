import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Contact = () => {
  const navbarStyle = {
    background: "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };

  return (
    <div className="bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]">
      <Navbar />
      <div className="container my-8 md:my-24 mx-auto md:px-6">
        <section className="bg-white dark:bg-gray-900 rounded-lg" style={navbarStyle}>
          <div className="container px-6 py-12 mx-auto">
            <div>
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Welcome to <span className='text-white'>Client</span> <span className='text-red-800'>Maker</span> - Your Digital Salesman
              </h1>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Our friendly team is always here to chat.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
              <ContactInfo
                icon={<EmailIcon />}
                title="Email"
                content="hello@clientmakergmail.com"
              />
              <ContactInfo
                icon={<OfficeIcon />}
                title="Office"
                content="Calicut Kinfra Kakkancheri"
              />
              <ContactInfo
                icon={<PhoneIcon />}
                title="Phone"
                content="+91 999449944"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container my-8 mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-5/12 px-4">
            <div className="relative rounded-lg bg-white shadow-lg dark:bg-dark-2 sm:p-8"style={navbarStyle}>
              <form>
                <ContactInputBox type="text" name="name" placeholder="Your Name" />
                <ContactInputBox type="text" name="email" placeholder="Your Email" />
                <ContactInputBox type="text" name="phone" placeholder="Your Phone" />
                <ContactTextArea row="6" placeholder="Your Message" name="details" defaultValue="" />
                <div className="mt-4">
                  <button type="submit" className="w-full rounded border border-primary bg-primary p-3 text-black transition hover:bg-opacity-90">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 px-4 mt-8 md:mt-0">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6"style={navbarStyle}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">What Sets Us Apart</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                <span className='text-white underline text-2xl'>Strategic Approach:</span> We don't believe in one-size-fits-all solutions. Our team of experienced digital marketing professionals takes a strategic approach, analyzing your business, industry, and target audience to develop customized strategies that deliver results.
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                <span className='text-white underline text-2xl'>Innovative Solutions:</span> In the ever-evolving world of digital marketing, staying ahead of the curve is crucial. That's why we're constantly exploring new technologies and innovative techniques to keep your brand at the forefront of your industry.
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                <span className='text-white underline text-2xl'>Transparency and Communication:</span> We believe in transparency and open communication every step of the way. You'll have full visibility into our process, with regular updates and reports to track the progress of your campaigns.
              </p>
              <h2 className="mt-8 text-xl font-semibold text-gray-800 dark:text-white">Get Started Today</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ready to take your digital marketing to the next level? Contact us today to schedule a consultation and discover how <span className='text-white font-extrabold'>Client</span> <span className='text-red-800 font-bold'>Maker</span> can help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ContactInfo = ({ icon, title, content }) => {
  const navbarStyle = {
    background: "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
    <div className="flex items-center">
      <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
        {icon}
      </span>
      <div className="ml-4">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
};

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  const navbarStyle = {
    background: "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
    <div className="mt-4">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded border border-stroke px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        defaultValue={defaultValue}
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  const navbarStyle = {
    background: "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
    <div className="mt-4">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded border border-stroke px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
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