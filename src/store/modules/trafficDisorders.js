import axios from 'axios';
import processGetTrafficDisordersUrl from './libraries/processGetTrafficDisordersUrl';
import processTrafficDisordersData from './libraries/processTrafficDisordersData';

const state = {
    trafficDisorders: []
};

const getters = {
    trafficDisorders: (state) => state.trafficDisorders
};

const actions = {
    async fetchTrafficDisorders({ commit, rootState }) {
        const filterQuery = rootState.filterQuery.filterQuery.generic;
        const response = await axios.get(processGetTrafficDisordersUrl(filterQuery));

        const trafficDisorders = processTrafficDisordersData(response.data);

        commit('setTrafficDisorders', trafficDisorders);
    }
};

const mutations = {
    setTrafficDisorders: (state, trafficDisorders) => (state.trafficDisorders = trafficDisorders)
};

export default {
    state,
    getters,
    actions,
    mutations
}