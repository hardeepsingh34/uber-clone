import React from 'react'

const LocationSearchPanel = (props) => {
    const locations = [
          "24B, Near Kapoor's Cafe, sheryians coding school, bhopal",
          "22C, Near Anee's School, sheryians coding school, bhopal",
          "40A, Near Gurdwara chmakaur garh sahib, coding school,bhopal",
          "32C, Near flyover kharar, sheryians coding school, chandigarh"
    ]
  return ( 
   <div>
    {locations.map(function(elem ,idx){
        return <div onClick={()=>{props.setVehiclePanel(true)
            
         props.setOpenPanel(false)}}
         key={idx}
          className='flex p-3 mt-2 border-2 border-gray-50 rounded-xl active:border-gray-500'>
        <div className='bg-[#eee] w-9 h-9  rounded-full flex justify-center items-center'>
<i className="ri-map-pin-fill"></i>
        </div>
        <div className='text-sm ml-4'>
          <h1>{elem}</h1>
       
        </div>
    </div>
    
    })}   
   </div>
  )
}

export default LocationSearchPanel