const axios = require("axios");

module.exports.getAddressCoordinate  = async (address)=>{
    const apikey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIcomponent(address)}&key=${apikey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            const lacation =response.data.results[0].gemetry.location;
            return{
                ltd: location.lat,
                lng: lacation.lng
            };
        }else{
            throw new Error('unable to fetch coordinates');
        }
        } catch(err){
            console.error(err);
            throw err;
        }
}