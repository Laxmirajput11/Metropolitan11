import React from 'react'

function Divider() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center mt-24 mb-24">
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-24 py-6 md:py-10 ">
        <h1>Fencing Solutions Canada</h1>
        <h1 className='text-2xl md:text-4xl font-black text-white mt-6 mb-8 '>Our Fences Keep Your Family & Property Safe!</h1>
        <p className='mt-2 md:mt-4 text-gray-300 text-sm md:text-base '>
        We acknowledge the worries that arise from having outdated or unimpressive fencing. You might be concerned about the security of your property, or your existing fencing might not deliver the privacy you seek. That's where Metropolitant Fence & Gate comes in – offering a complete remedy for these issues. With our services, you'll experience heightened security, unparalleled privacy, and captivating visual appeal that can elevate the value of your property.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 mx-4 md:mx-8 lg:mx-14 ">
        <img src='https://metropolitanfence.ca/images/family.jpg' alt='' className='w-full h-auto rounded-xl'/>
      </div>
    </div>

    </>
  )
}

export default Divider