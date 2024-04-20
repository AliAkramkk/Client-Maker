import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const ContactPage = () => {
  const navbarStyle = {
    background:
      "linear-gradient(to right,  rgb(250, 224, 226), rgb(189, 193, 199))",
  };
  return (
   
      <div className="bg-gray-400">
      <Navbar />
        <section className="relative z-10 overflow-hidden bg-blend-darken p-4 py-20 dark:bg-dark lg:py-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <span className="mb-4 block text-base font-semibold text-primary">
                    Contact Us
                  </span>
                  <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    GET IN TOUCH WITH US
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius tempor incididunt ut labore e dolore magna aliqua.
                    Ut enim adiqua minim veniam quis nostrud exercitation
                    ullamco
                  </p>
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Our Location
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_941_17577)">
                          <path
                            d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                            fill="currentColor"
                          />
                          <path
                            d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                            fill="currentColor"
                          />
                          <path
                            d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_941_17577">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Phone Number
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        (+62)81 414 257 9980
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px] ">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        clientmakersupport@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                  <form>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ContactInputBox
                      type="text"
                      name="email"
                      placeholder="Your Email"
                    />
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                    />
                    <ContactTextArea
                      row="6"
                      placeholder="Your Message"
                      name="details"
                      defaultValue=""
                    />
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded border border-primary bg-primary p-3 text-black transition hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -right-10 -top-14 z-[-1]  ">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                          fill="#ece4db"
                        />
                      </svg>
                    </span>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
   
  );
};

export default ContactPage;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};


// import React from "react";
// import Navbar from "../Components/Navbar/Navbar";
// function ContactForm() {
//   return (
//     <div className="bg-gray-800">
//       <Navbar />
//     <div className="container my-24 mx-auto md:px-6">
//       {/* Section: Design Block */}
//       <section className="mb-32">
//         <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
//         <div className="container px-6 md:px-12">
//           <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
//             <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
//               {/* Contact Info */}
//               <ContactInfo > <svg
//                           width="32"
//                           height="32"
//                           viewBox="0 0 32 32"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
//                             fill="currentColor"
//                           />
//                         </svg> 
//                         </ContactInfo>
//               <ContactInfo icon="mail" text="New York, 94126" />
//               <ContactInfo icon="phone" text="+ 01 234 567 89" />
//               <ContactInfo icon="document-text" text="Tax ID: 273 384" />
//             </div>
//             <div className="mx-auto max-w-[700px] bg-gray-100">
//               <form>
//                 {/* Input Fields */}
//                 <InputField type="text" placeholder="Name" />
//                 <InputField type="email" placeholder="Email address" />
//                 <TextareaField placeholder="Your message" />
//                 {/* Checkbox */}
//                 <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
//                   <input type="checkbox" id="exampleCheck96" defaultChecked />
//                   <label
//                     className="inline-block pl-[0.15rem] hover:cursor-pointer bg"
//                     htmlFor="exampleCheck96 "
//                   >
//                     Send me a copy of this message
//                   </label>
//                 </div>
//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
//                 >
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Section: Design Block */}
//     </div>
//     </div>
//   );
// }

// Contact Info Component
// function ContactInfo({ icon, text }) {
//   return (
//     <div className="mx-auto mb-12 text-center lg:mb-0">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d={icons[icon]} />
//       </svg>
//       <h6 className="font-medium">{text}</h6>
//     </div>
//   );
// }

// Input Field Component
// function InputField({ type, placeholder }) {
//   return (
//     <div className="relative mb-6" data-te-input-wrapper-init>
//       <input
//         type={type}
//         className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//         id={`exampleInput${Math.floor(Math.random() * 100)}`}
//         placeholder={placeholder}
//       />
//       <label
//         className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//         htmlFor={`exampleInput${Math.floor(Math.random() * 100)}`}
//       >
//         {placeholder}
//       </label>
//     </div>
//   );
// }

// Textarea Field Component
// function TextareaField({ placeholder }) {
//   return (
//     <div className="relative mb-6" data-te-input-wrapper-init>
//       <textarea
//         className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//         id={`exampleFormControlTextarea${Math.floor(Math.random() * 100)}`}
//         rows="3"
//         placeholder={placeholder}
//       ></textarea>
//       <label
//         htmlFor={`exampleFormControlTextarea${Math.floor(Math.random() * 100)}`}
//         className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//       >
//         {placeholder}
//       </label>
//     </div>
//   );
// }

// Icons Object
// const icons = {
//   "location-marker":  <svg
//                           width="32"
//                           height="32"
//                           viewBox="0 0 32 32"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
//                             fill="currentColor"
//                           />
//                         </svg>,
//   mail: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14-5-4 5-3 5 3-5 4zm0-12-8 5 8 5 8-5-8-5z",
//   phone:
//     "M3 5l1.39-.72c1.87-.96 3.58-.49 5.08.6l1.45 1.15c1.09.87 1.76 2.15 1.83 3.55.05 1.17-.41 2.32-1.22 3.24l-.92.92c-.92.92-2.13 1.43-3.4 1.43-1.28 0-2.48-.5-3.4-1.43l-.9-.9c-.92-.92-2.13-1.43-3.4-1.43-1.28 0-2.48.51-3.4 1.43l-1.39.72.7-1.5c.96-2.08 2.45-3.67 4.26-4.69zm17.64 6.11c-.36-.36-.92-.37-1.28-.02-.36.36-.37.92-.02 1.28.27.27.63.4 1 .4.39 0 .78-.15 1.08-.44l1.27-1.27c.36-.36.37-.92.02-1.28l-2.05-2.05c-.36-.36-.92-.37-1.28-.02l-1.26 1.27c-1.7-1.17-3.25-.49-4.46.72s-.72 2.76.01 4.46l1.26 1.26c-.36.36-.37.92-.02 1.28.18.18.41.27.64.27.23 0 .46-.09.64-.27l2.05-2.05c.35-.35.36-.92.01-1.28l-.01-.01z",
//   "document-text":
//     "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
// };

// export default ContactForm;
