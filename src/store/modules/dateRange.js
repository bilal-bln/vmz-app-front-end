import getDefaultDateRange from './libraries/getDefaultDateRange';

const state = {
    dateRange: getDefaultDateRange()
};

const getters = {
    dateRange: (state) => state.dateRange
};

const actions = {
    async updateDateRange({ commit }, newDateRange) {
        const dateRange = {
            startDate: newDateRange[0] ? newDateRange[0] : null,
            endDate: newDateRange[1] ? newDateRange[1] : null,
        };

        commit('setDateRange', dateRange);
    }
};

const mutations = {
    setDateRange: (state, dateRange) => (state.dateRange = dateRange)
};

export default {
    state,
    getters,
    actions,
    mutations
}