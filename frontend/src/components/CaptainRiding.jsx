import React from 'react'
import map from '../assets/images/ubermap.webp';
import { useState } from 'react';
import { useRef } from 'react';
import FinishRide from './FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const CaptainRiding = () => {
    const [captainRidingPanel, setCaptainRidingPanel] = useState(null);
    const captainRidingRef = useRef(null);

        useGSAP(function(){
        if(captainRidingPanel){
            gsap.to(captainRidingRef.current,{
             transform:'translateY(0)'
        })
        }else{
            gsap.to(captainRidingRef.current, {
                transform:'translateY(100%)'
            })
        }
    },[captainRidingPanel])

  return (
 <div className=" h-screen w-full bg-cover flex flex-col items-center justify-end absolute top-0 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="bg-cover absolute h-full w-full flex p-4 z-0 "
      >
        <div className="w-16  ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
            alt=""
          />

        </div>
       
      </div>
      <div className=" bg-yellow-300  w-full m-0 px-3  z-10">
     <div onClick={()=>setCaptainRidingPanel(true)} className=' w-full text-center py-2'>
           <i class="ri-arrow-up-wide-line text-xl"></i>
     </div>
        <div className='flex justify-around w-full items-center my-3 '>     
            <h1 className=" pr-5">4 Km away</h1>
             <button 
            className='bg-green-600 text-white p-2 px-7 rounded-sm'>Complete Ride</button>
 
        </div>

    </div>
      <div ref={captainRidingRef} className='absolute w-full left-0 bottom-0 bg-white z-20 p-4'>
        <FinishRide setCaptainRidingPanel={setCaptainRidingPanel} />
       </div>
    </div>
  )
}

export default CaptainRiding