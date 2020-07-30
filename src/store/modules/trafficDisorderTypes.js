import axios from 'axios';
import processGroupedByFieldUrl from './libraries/processGroupedByFieldUrl';
import processSelectOptionsData from './libraries/processSelectOptionsData';

const state = {
    trafficDisorderTypes: []
};

const getters = {
    trafficDisorderTypes: (state) => state.trafficDisorderTypes
};

const actions = {
    async fetchTrafficDisorderTypes({ commit, rootState }) {
        const fieldQuery = 'consequence.summary';
        const filterQuery = rootState.filterQuery.filterQuery.trafficDisorderTypes;
        const response = await axios.get(processGroupedByFieldUrl(fieldQuery, filterQuery));

        const trafficDisorderTypes = processSelectOptionsData(response.data);

        commit('setTrafficDisorderTypes', trafficDisorderTypes);
    }
};

const mutations = {
    setTrafficDisorderTypes: (state, trafficDisorderTypes) => (state.trafficDisorderTypes = trafficDisorderTypes)
};

export default {
    state,
    getters,
    actions,
    mutations
}