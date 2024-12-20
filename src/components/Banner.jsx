import React from 'react'
import IconStart from './../../src/assets/images/rating.png'
import IconHalfStart from './../../src/assets/images/rating-half.png'
import Thumpnail from './../../src/assets/images/temp-1.jpeg'
import IconPlay from './../../src/assets/images/play-button.png'



function Banner() {
  return (
    <div className=' w-full h-[700px] bg-banner bg-no-repeat bg-cover relative'>
      <div className='absolute w-full h-full opacity-30 top-0 left-0 bg-black'> </div>
      <div className='w-full h-full flex items-center justify-center gap-8 p-8 z-20 relative'>

        {/* left-side */}
        <div className='flex flex-col gap-5 items-baseline w-4/6'>
          <button className='text-white bg-gradient-to-r from-red-600 text-md to-red-200 py-2 px-4 relative '>TV Show</button>
          <div className='flex flex-col gap-4  z-50 max-w-[500px]'>
            <h1 className='text-white text-[32px]'>Nghe nói em thích tôi</h1>
            <div className='flex items-center gap-4'>
              <img src={IconStart} alt="" className='h-8 w-8' />
              <img src={IconStart} alt="" className='h-8 w-8' />
              <img src={IconStart} alt="" className='h-8 w-8' />
              <img src={IconStart} alt="" className='h-8 w-8' />
              <img src={IconHalfStart} alt="" className='h-8 w-8' />
            </div>
            <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur fugit id facilis adipisci. Sint quam cum dolore, nam nobis eveniet, repellendus vel reprehenderit dolorem pariatur porro rerum, neque ipsum?</p>
            <div className='flex gap-5 text-white font-semibold'>
              <button className='py-2 px-4 bg-black'>Chi tiết</button>
              <button className='py-2 px-4 bg-red-500'>Xem phim</button>
            </div>

          </div>


        </div>

        {/* right side */}
        <div className='w-2/6'>
          <div className='flex justify-start w-[335px] relative h-[600px] group cursor-pointer '>
            <img src={Thumpnail} alt="" className='object-contain   ' />

            <div className='w-[335px] h-full top-0 left-0 absolute flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 '>
              
            <img src={IconPlay} alt="" className='hidden group-hover:block w-16 h-16 absolute z-20 left-1/2 top-1/2 transform -translate-x-1/2' />
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Banner
