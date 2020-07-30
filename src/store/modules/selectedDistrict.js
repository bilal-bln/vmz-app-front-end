const state = {
    selectedDistrict: null
};

const getters = {
    selectedDistrict: (state) => state.selectedDistrict
};

const actions = {
    async updateSelectedDistrict({ commit }, selectedDistrict) {
        commit('setSelectedDistrict', selectedDistrict);
    }
};

const mutations = {
    setSelectedDistrict: (state, selectedDistrict) => (state.selectedDistrict = selectedDistrict)
};

export default {
    state,
    getters,
    actions,
    mutations
}