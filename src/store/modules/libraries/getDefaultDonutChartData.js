function getDefaultDonutChartData(id) {
    return {
        series: [],
        chartOptions: {
            chart: {
                id: id,
                type: 'donut',
                toolbar: { show: true }
            },
            labels: [],
            legend: {
                position: 'bottom'
            }
        }
    }
}

export default getDefaultDonutChartData;