function processTrafficSignIconUrl(trafficDisorderType) {
    if (trafficDisorderType === 'Bauarbeiten' || trafficDisorderType === 'Baustelle') {
        return 'DE_123_construction_site.png';
    }
    else if (trafficDisorderType === 'Fahrstreifensperrung' || trafficDisorderType === 'Sperrung') {
        return 'DE_250_barrier.png';
    }
    else if (trafficDisorderType === 'Gefahr' || trafficDisorderType === 'Störung') {
        return 'DE_101_danger.png';
    }
    else if (trafficDisorderType === 'Stau') {
        return 'DE_124_traffic_jam.png';
    }
    else if (trafficDisorderType === 'Unfall') {
        return 'DE_1006-36_traffic_accident.png';
    }
    else {
        return 'DE_101_danger.png';
    }
}

export default processTrafficSignIconUrl;