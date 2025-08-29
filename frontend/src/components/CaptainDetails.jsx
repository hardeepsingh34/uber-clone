 import React from 'react'
 
 const CaptainDetails = () => {
   return (
   <div className='flex justify-center bg-gray-100 p-4 rounded-2xl m-4'>
        <div className='flex justify-around w-[80%] '>
          <div className='flex flex-col justify-center w-20 items-center'>
          <i class="ri-timer-2-line text-xl"></i>
          <h5 className='text-[13px]'>10.2</h5>
          <h5 className='text-[10px] text-gray-700'>Hours Online</h5>
        </div>
        <div className='flex flex-col justify-center w-20 items-center'>
          <i class="ri-speed-up-line text-xl "></i>
          <h5 className='text-[13px]'>10.2</h5>
          <h5 className='text-[10px] text-gray-700'>Hours Online</h5>
        </div>
        <div className='flex flex-col justify-center w-20 items-center'>
       <i class="ri-file-list-line text-xl"></i>
          <h5 className='text-[13px]'>10.2</h5>
          <h5 className='text-[10px] text-gray-700'>Hours Online</h5>
        </div>
      </div>
      </div>
   )
 }
 
 export default CaptainDetails