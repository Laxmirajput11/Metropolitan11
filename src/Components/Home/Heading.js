import React from "react";
import img1 from '../../../src/Assets/Images/img1.jpg'

const Heading = () => {
    return(
        <>
        <div className="hero min-h-screen relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${img1})`, opacity: "0.3"}}></div>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center relative z-10">
                <div className="mt-48 my-48 max-w-[70%]">
                    <h1 className="text-5xl font-bold text-white text-center">Preserve Your Tranquility with <span>Metropolitan Fence & Gates</span></h1>
                    <h1 className="text-2xl font-bold text-white text-center mt-5">Fences & Gates Experts</h1>
                    <p className="py-6 text-white">At Metropolitan Fence & Gates, we take pride in our fully Canadian-owned enterprise. Our services encompass comprehensive fencing solutions throughout the Canada region. From initial design concepts to supply and installation, we are dedicated to fulfilling all your fencing needs. Our establishment aimed to bridge the gap in the local Western Australia market by delivering unparalleled quality in fencing materials and craftsmanship, surpassing all expectations. Our fences deliver results!</p>
                    <button className="btn btn-active btn-primary rounded-full mx-8" style={{ width: '280px' }}>Primary</button>
                    <button className="btn btn-outline btn-primary rounded-full" style={{ width: '280px' }}>Primary</button>

                </div>
            </div>
        </div>
        </>
    )
}
export default Heading;