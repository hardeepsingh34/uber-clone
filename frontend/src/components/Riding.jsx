import React from 'react'
import map from '../assets/images/ubermap2.avif';
import uberCar from '../assets/images/ubercar.webp'
import { Link } from 'react-router-dom';
const Riding = () => {
  return (
    <div className='h-screen'>
     <div className='h-1/2 bg-cover bg-red-500' style={{ backgroundImage: `url(${map})` }}> 
     <Link to={'/home'} className='bg-[#ffffff] fixed right-3 top-3 h-10 w-10 flex items-center justify-center rounded-full'><i class="ri-home-4-line"></i></Link>
     </div>

     <div className='p-3'>
    <div className='flex justify-between pr-3 pt-3'>
        <img className='h-[15vh]' src={uberCar} alt="" />
        <div className='text-right '>
        <h1 className='text-[15px]'>  hardeep</h1>
          <h1 className='font-semibold'>MP04 AB 1234</h1>
          <h3 className='text-[11px]'>Maruti Suzuki Alto</h3>
        </div>
    </div>
    
         <div className='flex p-3 mt-2 border-b-2 border-zdcsgray-200'>
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

    <button 
        className='bg-emerald-400 w-full p-2 rounded-sm mt-2'>Make a Payment</button>
         </div>
    </div>
  )
}

export default Riding