import processTrafficSignIconUrl from './processTrafficSignIconUrl';

function processTrafficDisordersData(responseData) {
    let trafficDisorders = []; // create an empty "trafficDisorders" array

    /*
        iterate through the http "response"."data" array
        - google for further information "JavaScript Array forEach"
    */
    responseData.forEach(element => {
        // fill trafficDisorders with data
        trafficDisorders = [
            /*
                get data of last "forEach" iteration
                - google for further information "JS spread operator",
                do not confuse with "JS Rest Parameters"
            */
            ...trafficDisorders,
            {
                _id: element._id, // unique id
                latLng: [ // "l-marker" latitude longitude format: array with two entries
                    element.location.coordinates[1], // latLng[0] latitude coordinate
                    element.location.coordinates[0] // latLng[1] longitude coordinate
                ],
                iconUrl: processTrafficSignIconUrl(element.consequence.summary) // traffic sign file name
            }
        ];
    });

    return trafficDisorders;
}

export default processTrafficDisordersData;