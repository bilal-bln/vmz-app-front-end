function processGroupedByFieldUrl(fieldQuery, filterQuery) {
    const url = `http://localhost:4000/traffic/disorders/aggregation/${fieldQuery}?`;
    return `${url}${filterQuery}`;
}

export default processGroupedByFieldUrl;