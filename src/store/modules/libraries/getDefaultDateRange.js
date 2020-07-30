function getDefaultDateRange() {
    const currentDate = new Date();
    const endDateDay = String(currentDate.getDate()).padStart(2, '0');
    const endDateMonth = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const endDateYear = currentDate.getFullYear();
    const endDate = `${endDateYear}-${endDateMonth}-${endDateDay}`;

    const dateTwoWeeksAgo = (d => new Date(d.setDate(d.getDate() - 14)))(new Date);
    const startDateDay = String(dateTwoWeeksAgo.getDate()).padStart(2, '0');
    const startDateMonth = String(dateTwoWeeksAgo.getMonth() + 1).padStart(2, '0'); //January is 0!
    const startDateYear = dateTwoWeeksAgo.getFullYear();
    const startDate = `${startDateYear}-${startDateMonth}-${startDateDay}`;

    return {
        startDate: startDate,
        endDate: endDate
    }
}

export default getDefaultDateRange;