function processSelectOptionsData(responseData) {
    // https://alligator.io/js/filter-array-method/
    
    const idIsAnEmptyString =
        (responseData.filter(element => (element._id === ''))[0]) ?
            (responseData.filter(element => (element._id === ''))) :
            [{ count: 0 }];

    const idIsNull =
        (responseData.filter(element => (element._id === null))[0]) ?
            (responseData.filter(element => (element._id === null))) :
            [{ count: 0 }];

    const totalCountOfNotDefinedIds = idIsAnEmptyString[0].count + idIsNull[0].count;

    const idIsNotDefined = {
        _id: 'null',
        label: `nicht angegeben (${totalCountOfNotDefinedIds})`
    };

    let processedSelectOptionsData = totalCountOfNotDefinedIds ? [idIsNotDefined] : [];

    responseData.forEach(element => {
        processedSelectOptionsData = (element._id === null || element._id === '') ?
            [...processedSelectOptionsData] :
            [
                ...processedSelectOptionsData,
                {
                    _id: element._id,
                    label: `${element._id} (${element.count})`
                }
            ]
    });

    return processedSelectOptionsData;
}

export default processSelectOptionsData;