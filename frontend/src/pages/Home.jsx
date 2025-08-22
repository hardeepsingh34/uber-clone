import React from 'react'
import map from '../assets/images/ubermap.webp';
import { useState, useRef } from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState('');
    const [openPanel , setOpenPanel] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRide, setConfirmRide] = useState(false);
    const [lookingForDriverPanel,setLookingForDriverPanel] = useState(false);
    const[waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const ConfirmPanelRef = useRef(null);
    const lookingForDriverRef =useRef(null);
    const waitingForDriverRef = useRef(null);
    
    useGSAP(function(){
        if(waitingForDriverPanel){
            gsap.to(waitingForDriverRef.current,{
             transform:'translateY(0)'
        })
        }else{
            gsap.to(waitingForDriverRef.current, {
                transform:'translateY(100%)'
            })
        }
    },[waitingForDriverPanel])


    useGSAP(function(){
        if(lookingForDriverPanel){
            gsap.to(lookingForDriverRef.current,{
             transform:'translateY(0)'
        })
        }else{
            gsap.to(lookingForDriverRef.current, {
                transform:'translateY(100%)'
            })
        }
    },[lookingForDriverPanel])

    useGSAP(function(){
        if(openPanel){
            gsap.to(panelRef.current,{
                height:'73vh',
                
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0vh'
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
    },[openPanel])

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
             transform:'translateY(0)'
        })
        }else{
            gsap.to(vehiclePanelRef.current, {
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])
    useGSAP(function(){
        if(confirmRide){
            console.log(confirmRide)
            gsap.to(ConfirmPanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(ConfirmPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRide])
    const submitHandler=(e)=>{
           e.preventDefault();
           console.log(pickup,destination);
    }
 return (
    <div className=" h-screen bg-cover flex flex-col items-center justify-end absolute top-0 overflow-hidden">
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
      <div className=" bg-white w-full m-0 px-3  z-10">
        <div className='flex justify-between items-center mt-3'>     
            <h1 className=" mt-4 text-xl">Find a trip</h1>
           <i ref={panelCloseRef} onClick={()=>setOpenPanel(false)} className="ri-arrow-down-wide-fill relative top-2 text-xl opacity-0"></i>
        </div>
        
       <form action="" onSubmit={(e)=>{
        submitHandler(e);
       }}>
            <input 
       type="text" 
       value={pickup}
       onClick={()=>{
        setOpenPanel(true);
       }}
       onChange={(e)=>{
        setPickup(e.target.value);
       }}
       placeholder='Add a pick-up location' 
       className='bg-[#eee] w-full rounded-sm p-2 mt-3 text-base' />

       <input 
       type="text" 
       value={destination}
       onClick={()=>{
        setOpenPanel(true);
       }}
       onChange={(e)=>{
        setDestination(e.target.value);
       }}
       placeholder='Enter your destination' 
       className='bg-[#eee] w-full rounded-sm p-2 mt-3 text-base' />
      
       </form>
       <div ref={panelRef} className='h-0  mt-10 '>
            <LocationSearchPanel setOpenPanel={setOpenPanel} setVehiclePanel={setVehiclePanel}/>
       </div >

       <div ref={vehiclePanelRef} className='absolute w-full left-0 bottom-0 bg-white z-20 p-4'>
      <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanel={setVehiclePanel}/>
       </div>
       <div ref={ConfirmPanelRef} className='absolute w-full left-0 bottom-0 bg-white z-20 p-4'>
      <ConfirmRide setConfirmRide={setConfirmRide} setLookingForDriverPanel={setLookingForDriverPanel}/>
       </div>
        <div ref={lookingForDriverRef} className='absolute w-full left-0 bottom-0 bg-white z-20 p-4'>
      <LookingForDriver setLookingForDriverPanel={setLookingForDriverPanel} setConfirmRide={setConfirmRide}/>
       </div>
       <div ref={waitingForDriverRef} className='absolute w-full left-0 bottom-0 bg-white z-20 p-4'>
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel} />
       </div>
      </div>
    </div>
  );
}

export default Home