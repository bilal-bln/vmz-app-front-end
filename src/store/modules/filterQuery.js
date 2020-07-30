function getDefaultFilterQuery() {
    return '&state=Berlin';
}

const state = {
    filterQuery: getDefaultFilterQuery()
};

const getters = {
    filterQuery: (state) => state.filterQuery
};

const actions = {
    async processFilterQuery({ commit, rootState }) {
        const dateRange = rootState.dateRange.dateRange;
        const selectedDistrict = rootState.selectedDistrict.selectedDistrict;
        const selectedTrafficDisorderType = rootState.selectedTrafficDisorderType.selectedTrafficDisorderType;

        const stateQuery = '&state=Berlin';
        const startDateQuery = dateRange.startDate ? `&startDate=${dateRange.startDate}` : '';
        const endDateQuery = dateRange.endDate ? `&endDate=${dateRange.endDate}` : '';
        const districtQuery = selectedDistrict ? `&district=${selectedDistrict}` : '';
        const typeQuery = selectedTrafficDisorderType ? `&type=${selectedTrafficDisorderType}` : '';

        // const filterQuery = `${stateQuery}${startDateQuery}${endDateQuery}${districtQuery}${typeQuery}`;

        const filterQuery = {
            generic: `${stateQuery}${startDateQuery}${endDateQuery}${districtQuery}${typeQuery}`,
            districts: `${stateQuery}${startDateQuery}${endDateQuery}${typeQuery}`,
            trafficDisorderTypes: `${stateQuery}${startDateQuery}${endDateQuery}${districtQuery}`,
            state: stateQuery,
            startDate: startDateQuery,
            endDate: endDateQuery,
            district: districtQuery,
            type: typeQuery
        }

        commit('setFilterQuery', filterQuery);
    }
};

const mutations = {
    setFilterQuery: (state, filterQuery) => (state.filterQuery = filterQuery)
};

export default {
    state,
    getters,
    actions,
    mutations
}