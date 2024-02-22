import React from 'react'

export default function Shimmerdetails() {
  return (
    <div className='country-detail px-6 my-14 lg:px-20'>
    <div className='main-container mt-16  lg:flex gap-10 '>
      <div className='w-1/2 h-full flag-container  md:h-96 lg:min-w-max'>
        <div className=' rounded-lg w-full h-full bg-stone-400'></div> 
      </div>
      <div className='information-container my-auto  '>
        <div className='w-48 h-10 bg-stone-400'></div>
        <div className='details-container flex flex-col gap-10  md:flex-row'>
            <div className='major-details-container md:w-1/2 mt-5 flex flex-col gap-3'>
            <div className="w-72 h-6 bg-stone-400"></div>
            <div className="w-72 h-6 bg-stone-400"></div>
            <div className="w-72 h-6 bg-stone-400"></div>
            <div className="w-72 h-6 bg-stone-400"></div>
          </div>
          <div className='minor-details-container flex flex-col gap-3  md:mt-5' >
          <div className="  w-72 h-6 bg-stone-400"></div>
            <div className="w-72 h-6 bg-stone-400"></div>
            <div className="w-72 h-6 bg-stone-400"></div>
            <div className="w-72 h-6 bg-stone-400"></div>
            </div>

        </div>

     
        <div className=' flex items-center gap-x-2 gap-y-2 flex-wrap  mt-10 '>
            <div className="w-full h-6 bg-stone-400"></div>
          </div>

        
      </div>
    </div>
  </div>

  )
}
