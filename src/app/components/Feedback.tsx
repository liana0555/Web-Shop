import { Container } from 'postcss'
import React from 'react'
import Image from 'next/image'

const Feedback = () => {
  return (
    <div>
    <div className='container pt-16 pb-16 grid-cols-2'>
      <h2 className='font-medium text-2xl pb-4'>Feedback</h2>
      <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
        <div className='text-center flex flex-col items-center gap-1'>
            <Image
            className='rounded-full inline-block'
            src="/user.jpg"
            width={80}
            height={80}
            alt='dp' //dp-means profile picture
            />
            <h2 className='text-gray-500 font-black text-[20px]'>Clark Valberg</h2>
            <p>Founder, CEO InVisionApp Inc.</p>

            <Image
            className='inline-block py-2'
            src="/quotes.svg"
            width={30}
            height={30}
            alt="quotes"
            />
            <p className='max-w-[200px] text-gray-500'> 
                dfghjk ghj hjb ghjhgh hiuyyui ghj ghjytyu 5678iu gtu 
            </p>

        </div>
        </div>
      </div>


      <div className='bg-red-600 
      bg-[url(/cta-banner.jpg)] 
      bg-cover h-[500px]
      rounded-2xl grid place-items-center '>
        <div>
            <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[400px]
            rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
                <button className='bg-blackish text-white p-2 rounded-md '>
                    25% DISCOUNT
                </button>
                <h2 className='font-extrabold text-2xl text-[#272727]'>Summer Collection</h2>
                <p className='text-gray-500 text-[20px]'>
                    Starting at 20$ <b>Shop Now </b>
                </p>

            </div>
        </div>
      </div>



    </div>
    </div>
  )
}

export default Feedback
