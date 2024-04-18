import React from 'react'

function LeftDivider() {
  return (
    <>
    <div className='bg-white pt-1 pb-1'>
        <div className="flex flex-col md:flex-row items-center mt-24 mb-24">
            <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-14 ">
                <img src='https://metropolitanfence.ca/images/Grey.jpg' alt='' className='w-full h-auto rounded-xl mx-7'/>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-24 py-6 md:py-10 ">
                <h1 className='text-black'>Fences Canada</h1>
                <h1 className='text-2xl md:text-4xl font-black text-black mt-6 mb-8 '>Discover Your Perfect Fencing Solution</h1>
                <p className='mt-2 md:mt-4 text-black text-sm md:text-base '>
                At Metropolitan Fence & Gates, variety is our specialty. Whether you lean towards the modern elegance of aluminum slat fencing, the enduring charm of Colorbond fencing, or the elaborate patterns of tubular fencing, we offer an extensive range. Explore our collection today and uncover the ideal fence that mirrors your preferences and fulfills your requirements.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default LeftDivider