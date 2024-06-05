import React from 'react';

import image from '../../assets/calltoaction.avif'; 
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <>
          
            <section className="callto-action-area lg:ml-32 lg:mr-32">
                <div className="container mx-auto">
                    <div className="flex justify-center text-center">
                        <div className="relative w-full bg-cover bg-no-repeat bg-center rounded-lg " style={{ backgroundImage: `url(${image})` }}>
                            <div className="bg-black bg-opacity-50 p-12 rounded-lg justify-center">
                                <div className="content text-center text-white">
                                    <h1 className="text-4xl font-bold mb-4">
                                        Looking for a <br />
                                        quality and affordable interior design?
                                    </h1>
                                    <p className="max-w-xl mx-auto mb-6">
                                        Inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.
                                    </p>
                                    <Link to='/contact' className="bg-gold-500 text-white font-bold py-2 px-4 rounded uppercase border">Request quote now</Link>
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
