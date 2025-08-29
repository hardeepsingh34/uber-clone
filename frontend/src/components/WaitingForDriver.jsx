import React from 'react'
import uberCar from '../assets/images/ubercar.webp'

const WaitingForDriver = () => {
  return (<div>
  <div className='flex justify-between'>
      <img className='h-[15vh]' src={uberCar} alt="" />
      <div className='text-right '>
      <h1 className='text-[15px]'>  hardeep</h1>
        <h1 className='font-semibold'>MP04 AB 1234</h1>
        <h3 className='text-[11px]'>Maruti Suzuki Alto</h3>
      </div>
  </div>
  
  <div className='flex p-3  border-b-2 border-gray-200'>
          <div className=' flex justify-center items-center'>
  <i className="ri-map-pin-user-fill"></i>
          </div>
          <div className='text-sm ml-4'>
            <h1>562/11-A</h1>
            <h4 className='text-[12px] text-gray-600'>knakariya Talab,bhopal</h4>
         
          </div>
      </div>
      <div className='flex p-3 mt-2 border-b-2 border-gray-200'>
          <div className=' flex justify-center items-center'>
  <i className="ri-map-pin-fill"></i>
          </div>
          <div className='text-sm ml-4'>
            <h1>562/11-A</h1>
            <h4 className='text-[12px] text-gray-600'>knakariya Talab,bhopal</h4>
         
          </div>
      </div>
      <div className='flex p-3 mt-2 '>
          <div className=' flex justify-center items-center'>
  <i className="ri-currency-fill"></i>
          </div>
          <div className='text-sm ml-4'>
            <h1>₹193.12</h1>
            <h4 className='text-[12px] text-gray-600'>cash cash</h4>
         
          </div>
      </div>
      </div>
  )
}

export default WaitingForDriver
