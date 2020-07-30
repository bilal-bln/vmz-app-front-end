import axios from 'axios';
import getDefaultDonutChartData from './libraries/getDefaultDonutChartData';
import processDonutChartData from './libraries/processDonutChartData';
import processGroupedByFieldUrl from './libraries/processGroupedByFieldUrl';

const state = {
  trafficDisordersByTypeChartData: getDefaultDonutChartData('traffic-disorders-by-type-chart-data')
};

const getters = {
  trafficDisordersByTypeChartData: (state) => state.trafficDisordersByTypeChartData
};

const actions = {
  async fetchTrafficDisordersByTypeChartData({ commit, rootState }) {
    const fieldQuery = 'consequence.summary';
    const filterQuery = rootState.filterQuery.filterQuery.generic;
    const response = await axios.get(processGroupedByFieldUrl(fieldQuery, filterQuery));

    const trafficDisordersByTypeChartData = processDonutChartData(
      getDefaultDonutChartData('traffic-disorders-by-type-chart-data'),
      response.data
    );

    commit('setTrafficDisordersByTypeChartData', trafficDisordersByTypeChartData);
  }
};

const mutations = {
  setTrafficDisordersByTypeChartData: (state, trafficDisordersByTypeChartData) => (state.trafficDisordersByTypeChartData = trafficDisordersByTypeChartData)
};

export default {
  state,
  getters,
  actions,
  mutations
}