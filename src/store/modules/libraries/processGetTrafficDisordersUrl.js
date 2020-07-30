function processGetTrafficDisordersUrl(filterQuery) {
    const url = 'http://localhost:4000/traffic/disorders?';
    return `${url}${filterQuery}`;
}

export default processGetTrafficDisordersUrl;