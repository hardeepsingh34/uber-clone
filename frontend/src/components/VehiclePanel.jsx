import React from 'react'
import uberCar from '../assets/images/ubercar.webp'
import uberAuto from '../assets/images/uberAuto.webp'
import uberMoto from '../assets/images/uberMoto.webp'

const VehiclePanel = (props) => {
  return (
    <div>
         <div onClick={()=>props.setVehiclePanel(false)} className='w-full  flex justify-center'>
     <i   className="ri-arrow-down-wide-fill  text-2xl text-gray-300 "></i>

        </div>       
       <h1 className='text-xl font-semibold mb-4 '>Choose a Vehicle</h1>

        <div onClick={()=>{props.setConfirmRide(true)
            props.setVehiclePanel(false);
        }} className='flex p-1 mb-3 items-center rounded-xl border-2  border-gray-200 active:border-black'>
              <img className='h-16' src={uberCar} alt="" />
     <div className='px-2 w-1/2'>
         <h1 className='text-[14px]'>UberGo <i className="ri-user-fill"></i>4</h1>
         <h4 className='text-xs'>2 min away</h4>
         <h4 className='text-[10px] text-gray-500 font-semibold'>Affordable, compact rides</h4>
     </div>
       <h1> ₹193.20</h1>
        </div>


       <div onClick={()=>{props.setConfirmRide(true)
        props.setVehiclePanel(false);
       }} className='flex p-1 py-[1.75vh] mb-3 items-center rounded-xl border-2  border-gray-200 active:border-black'>
              <img className='h-8 ml-2 px-4' src={uberMoto} alt="" />
     <div className='px-2 ml-4 w-1/2'>
         <h1 className='text-[14px]'>UberGo <i className="ri-user-fill"></i>1</h1>
         <h4 className='text-xs'>2 min away</h4>
         <h4 className='text-[10px] text-gray-500 font-semibold'>Affordable motorcycle rides</h4>
     </div>
       <h1 > ₹62</h1>
        </div>


        <div onClick={()=>{props.setConfirmRide(true)
            props.setVehiclePanel(false);
        }} className='flex p-1 py-2.5 mb-3 items-center rounded-xl border-2  border-gray-200 active:border-black'>
              <img className='h-8 ml-2 px-4 ' src={uberAuto} alt="" />
     <div className='px-2 ml-4 w-1/2'>
         <h1 className='text-[14px]'>UberGo <i className="ri-user-fill"></i>3</h1>
         <h4 className='text-xs'>2 min away</h4>
         <h4 className='text-[10px] text-gray-500 font-semibold'>Affordable Auto rides</h4>
     </div>
       <h1> ₹118.10</h1>
        </div>


    </div>
  )
}

export default VehiclePanel