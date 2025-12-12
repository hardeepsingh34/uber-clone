const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
       
        return {
                ltd: 30.701099220945824 ,
                lng:  76.70966087441603
            };
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
   //https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent( 30.700733337108044,76.70935525397773)}&destinations=${encodeURIComponent(30.691391713428597,76.71079158742135)}&key=AIzaSyD-Q0Beowy-r5mh5BDDOrzhoi9KEMdDMW8`
    try {


        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        return {
               distance: {
                value: 8000
               },
               duration:{
                value: 60
               } 
        }
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
     //`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    const url = `https://maps.gomaps.pro/maps/api/place/findplacefromtext/json?fields=formatted_address&input=${encodeURIComponent(input)}&key=${apiKey}`
    // AIzaSyCsVu4ewaRjDPGUgTL2Kp_pv40FYxYu19s
    //AlzaSyu0YMu5-zXUALC6LIek06J8_4P7BuKjnvt
    // https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(moha)}&key=AlzaSyu0YMu5-zXUALC6LIek06J8_4P7BuKjnvt
    // https://maps.gomaps.pro/maps/api/place/details/json?place_id=ChIJLU7jZClu5kcR4PcOOO6p3I0&key=AlzaSyu0YMu5-zXUALC6LIek06J8_4P7BuKjnvt
    //AIzaSyD-Q0Beowy-r5mh5BDDOrzhoi9KEMdDMW8
    //https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(moha)}&key=AIzaSyD-Q0Beowy-r5mh5BDDOrzhoi9KEMdDMW8
    //https://maps.gomaps.pro/maps/api/place/findplacefromtext/json?fields=formatted_address&input=${encodeURIComponent(input)}&locationbias=${apiKey}
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        return suggestions.map(prediction => prediction.description).filter(value => value);
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km


    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;


}