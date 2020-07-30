const state = {
    selectedTrafficDisorderType: null
};

const getters = {
    selectedTrafficDisorderType: (state) => state.selectedTrafficDisorderType
};

const actions = {
    async updateSelectedTrafficDisorderType({ commit }, selectedTrafficDisorderType) {
        commit('setSelectedTrafficDisorderType', selectedTrafficDisorderType);
    }
};

const mutations = {
    setSelectedTrafficDisorderType: (state, selectedTrafficDisorderType) => (state.selectedTrafficDisorderType = selectedTrafficDisorderType)
};

export default {
    state,
    getters,
    actions,
    mutations
}