import React from 'react'

function Cards() {
  return (

    <>
    <div className='bg-white p-10 shadow-xl text-center' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h1 className='text-xl text-black'>Fencing Canada</h1>
    <h1 className='text-4xl mb-10 font-bold text-black'>Keep Your Family & Property Safe With Our Great Variety Of Options</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div className="card flex-1 bg-base-100 shadow-xl mx-10" style={{ maxHeight: '250px', position: 'relative' }}>
                <figure><img src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZmVuY2V8ZW58MHx8MHx8fDA%3D" alt="" className="w-full h-full object-cover" /></figure>
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="card-body absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-center">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-1 bg-base-100 shadow-xl mx-10" style={{ maxHeight: '250px', position: 'relative' }}>
                <figure><img src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZmVuY2V8ZW58MHx8MHx8fDA%3D" alt="" className="w-full h-full object-cover" /></figure>
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="card-body absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-center">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div className="card flex-1 bg-base-100 shadow-xl mx-10" style={{ maxHeight: '250px', position: 'relative' }}>
                <figure><img src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZmVuY2V8ZW58MHx8MHx8fDA%3D" alt="" className="w-full h-full object-cover" /></figure>
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="card-body absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-center">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-1 bg-base-100 shadow-xl mx-10" style={{ maxHeight: '250px', position: 'relative' }}>
                <figure><img src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZmVuY2V8ZW58MHx8MHx8fDA%3D" alt="" className="w-full h-full object-cover" /></figure>
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="card-body absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h2 className="text-center">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Cards;