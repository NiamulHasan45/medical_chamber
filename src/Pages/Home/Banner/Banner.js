import React from 'react';
import chair from '../../../assets/images/chair.png'
// import background from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg md:max-w-lg sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your new smile starts here</h1>
                    <p className="py-6 pr-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary upper font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;