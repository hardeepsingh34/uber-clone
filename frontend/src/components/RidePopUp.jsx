import React from 'react'

const RidePopUp = (props) => {
  return (
     <div>
            <div onClick={()=>props.setRidePopUpPanel(false)} className='w-full  flex justify-center'>
              <i   className="ri-arrow-down-wide-fill  text-2xl text-gray-300 "></i>
            </div>    
    <h1 className='text-xl font-semibold  '>Confirm your Ride</h1>
     <div className='flex justify-between items-center my-4 border-2 border-yellow-300 p-2 rounded-xl'>    
          <div className='flex items-center justify-around'>
           <div>
                 <img className='h-13 w-13 rounded-full border-[0.5px] border-gray-300' src="data:image/jpeg;base64,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" alt="" /></div> 
            <h1 className=" ml-4 ">Harshita </h1>
           </div>
            <h5 className='font-semibold'>2.2 Km</h5>
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
              <h1>543/65-D</h1>
              <h4 className='text-[12px] text-gray-600'>81 sector,moholi</h4>
           
            </div>
        </div>
        <div className='flex p-3 mt-2 '>
            <div className=' flex justify-center items-center'>
    <i className="ri-currency-fill"></i>
            </div>
            <div className='text-sm ml-4'>
              <h1>₹193.19</h1>
              <h4 className='text-[12px] text-gray-600'>cash cash</h4>
           
            </div>
        </div>
       <div className='flex gap-7 mb-7'>
        <button onClick={()=>{
            props.setRidePopUpPanel(false)}} 
            className='bg-gray-300 w-full p-2 rounded-sm mt-2'>Ignore</button>

         <button onClick={()=>{
            props.setConfirmRidePopUpPanel(true)
            props.setRidePopUpPanel(false)}} 
            className='bg-emerald-400 w-full p-2 rounded-sm mt-2'>Accept </button>   
       </div>
        </div>
  )
}

export default RidePopUp