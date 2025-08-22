import React from 'react'
import uberCar from '../assets/images/ubercar.webp'
const ConfirmRide = (props) => {
  return (
    <div>
        <div onClick={()=>props.setConfirmRide(false)} className='w-full  flex justify-center'>
          <i   className="ri-arrow-down-wide-fill  text-2xl text-gray-300 "></i>
        </div>    
<h1 className='text-xl font-semibold  '>Confirm your Ride</h1>
<div className='flex justify-center'>
    <img className='h-[23vh]' src={uberCar} alt="" />
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
          <h1>562/11-A</h1>
          <h4 className='text-[12px] text-gray-600'>knakariya Talab,bhopal</h4>
       
        </div>
    </div>
    <button onClick={()=>{
        props.setLookingForDriverPanel(true)
        props.setConfirmRide(false)}} 
        className='bg-emerald-400 w-full p-2 rounded-sm mt-2'>Confirm</button>
    </div>
  )
}

export default ConfirmRide