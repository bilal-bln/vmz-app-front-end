import axios from 'axios';
import processGroupedByFieldUrl from './libraries/processGroupedByFieldUrl';
import processSelectOptionsData from './libraries/processSelectOptionsData';

const state = {
    districts: []
};

const getters = {
    districts: (state) => state.districts
};

const actions = {
    async fetchDistricts({ commit, rootState }) {
        const fieldQuery = 'address.district';
        const filterQuery = rootState.filterQuery.filterQuery.districts;
        const response = await axios.get(processGroupedByFieldUrl(fieldQuery, filterQuery));

        const districts = processSelectOptionsData(response.data);

        commit('setDistricts', districts);
    }
};

const mutations = {
    setDistricts: (state, districts) => (state.districts = districts)
};

export default {
    state,
    getters,
    actions,
    mutations
}