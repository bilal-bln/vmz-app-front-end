function processTrafficDisorderData(responseData) {
    const data = responseData[0];

    return {
        _id: data._id, // unique id
        // "l-marker" latitude longitude format
        latLng: [
            data.location.coordinates[1], // latitude coordinate
            data.location.coordinates[0] // longitude coordinate
        ],
        summary: data.consequence.summary,
        description: data.description,
        street: data.streets[0],
        section: data.section,
        timeFrom: data.validities.timeFrom.substring(0, 10),
        timeTo: data.validities.timeTo.substring(0, 10)
    }
}

export default processTrafficDisorderData;