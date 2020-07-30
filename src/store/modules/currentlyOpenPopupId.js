const state = {
    currentlyOpenPopupId: ''
};

const getters = {
    currentlyOpenPopupId: (state) => state.currentlyOpenPopupId
};

const actions = {
    async updateCurrentlyOpenPopupId({ commit }, currentlyOpenPopupId) {
        commit('setCurrentlyOpenPopupId', currentlyOpenPopupId);
    }
};

const mutations = {
    setCurrentlyOpenPopupId:
        (state, currentlyOpenPopupId) =>
            (state.currentlyOpenPopupId = currentlyOpenPopupId)
};

export default {
    state,
    getters,
    actions,
    mutations
}