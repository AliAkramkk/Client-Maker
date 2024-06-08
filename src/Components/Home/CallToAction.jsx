import React from 'react';

import image from '../../assets/calltoaction.avif'; 
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <>
          
            <section className="callto-action-area lg:ml-32 lg:mr-32 m-10">
                <div className="container mx-auto">
                    <div className="flex justify-center text-center">
                        <div className="relative w-full bg-cover bg-no-repeat bg-center rounded-lg " style={{ backgroundImage: `url(${image})` }}>
                            <div className="bg-black bg-opacity-50 p-12 rounded-lg justify-center">
                                <div className="content text-center text-white">
                                    <h1 className="lg:text-2xl sm:text-lg font-bold mb-4">
                                    Elevate Your Brand's Presence <br />
                                    with Expert Digital Marketing Solutions
                                    </h1>
                                    <p className="max-w-xl mx-auto mb-6">
                                    Stand out in the digital landscape and connect with your audience effectively. Our innovative strategies and tailored campaigns will help your brand thrive online.
                                    </p>
                                    <Link to='/contact' className="bg-gold-500 text-white font-bold lg:py-2 lg:px-4 p-1 rounded uppercase border">Request quote now</Link>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>  
            </section>
          
        </>
    );
};

export default CallToAction;
