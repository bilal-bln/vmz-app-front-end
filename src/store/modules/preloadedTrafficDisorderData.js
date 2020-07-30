import axios from 'axios';
import processGetTrafficDisorderDataUrl from './libraries/processGetTrafficDisorderDataUrl';
import processTrafficDisorderData from './libraries/processTrafficDisorderData';

const state = {
    preloadedTrafficDisorderData: {}
};

const getters = {
    preloadedTrafficDisorderData: (state) => state.preloadedTrafficDisorderData
};

const actions = {
    async fetchPreloadedTrafficDisorderData({ commit, state }, trafficDisorderId) {
        if (trafficDisorderId !== state.preloadedTrafficDisorderData._id) {
            const response = await axios.get(processGetTrafficDisorderDataUrl(trafficDisorderId));

            const preloadedTrafficDisorderData = processTrafficDisorderData(response.data);

            commit('setPreloadedTrafficDisorderData', preloadedTrafficDisorderData);
        }
    }
};

const mutations = {
    setPreloadedTrafficDisorderData:
        (state, preloadedTrafficDisorderData) =>
            (state.preloadedTrafficDisorderData = preloadedTrafficDisorderData)
};

export default {
    state,
    getters,
    actions,
    mutations
}