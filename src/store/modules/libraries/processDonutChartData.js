function processDonutChartData(defaultChartData, responseData) {
    let processedChartData = defaultChartData;

    responseData.forEach(element => {
        processedChartData = {
            ...processedChartData,
            series: [
                ...processedChartData.series,
                element.count
            ],
            chartOptions: {
                ...processedChartData.chartOptions,
                labels: [
                    ...processedChartData.chartOptions.labels,
                    element._id === '' ? 'Nicht angegeben' : element._id
                ]
            }
        };
    });

    return processedChartData;
}

export default processDonutChartData;