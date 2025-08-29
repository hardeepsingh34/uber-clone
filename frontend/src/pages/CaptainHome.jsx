import React from 'react'
import map from '../assets/images/ubermap.webp'
import captainLogo from "../assets/images/captainlogo.svg";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
const CaptainHome = () => {
  
  const [ridePopUpPanel, setRidePopUpPanel] = useState(null);
  const ridePopUpPanelRef = useRef(null);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(null);
  const confirmRidePopUpRef = useRef(null);
      useGSAP(function(){
        if(ridePopUpPanel){
            gsap.to(ridePopUpPanelRef.current,{
             transform:'translateY(0)'
        })
        }else{
            gsap.to(ridePopUpPanelRef.current, {
                transform:'translateY(100%)'
            })
        }
    },[ridePopUpPanel])

      useGSAP(function(){
        if(confirmRidePopUpPanel){
            gsap.to(confirmRidePopUpRef.current,{
             transform:'translateY(0)'
        })
        }else{
            gsap.to(confirmRidePopUpRef.current, {
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePopUpPanel])


  return (
  <div className=" h-screen w-full bg-cover flex flex-col items-center justify-end absolute top-0 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="bg-cover absolute h-full w-full flex p-4 z-0 "
      >
        <div className="w-16  ">
          <img
            src={captainLogo}
            alt=""
          />

        </div>
       
      </div>
      <div className=" bg-white w-full m-0 px-3  z-10">
        <div className='flex justify-between items-center mt-3'>    
          <div className='flex items-center justify-around'>
           <div>
             <img className='h-13 w-13 rounded-full border-[0.5px] border-gray-300' src="data:image/jpeg;base64,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" alt="" /></div> 
            <h1 className=" ml-4 ">Harsh Patel </h1>
           </div>
            <h5 onClick={()=> setRidePopUpPanel(true)}>₹295.20<br /> <span className='text-xs text-gray-700'>Earned</span></h5>
        </div>
        
    <div> 
      <CaptainDetails/>
    </div>
  <div ref={ridePopUpPanelRef} className='absolute w-full translate -[100%] left-0 bottom-0 bg-white z-20 p-4'>
      <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
       </div>
       <div ref={confirmRidePopUpRef} className='absolute h-screen w-full translate -[100%] left-0 bottom-0 bg-white z-20 p-4'>
      <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
       </div>
       </div>
      </div>
  )
}

export default CaptainHome