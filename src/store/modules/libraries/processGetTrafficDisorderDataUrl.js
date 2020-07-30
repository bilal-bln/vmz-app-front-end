function processGetTrafficDisorderDataUrl(_id) {
    return `http://localhost:4000/traffic/disorders/${_id}/details`;
}

export default processGetTrafficDisorderDataUrl;