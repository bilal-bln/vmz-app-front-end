import axios from 'axios';
import getDefaultDonutChartData from './libraries/getDefaultDonutChartData';
import processDonutChartData from './libraries/processDonutChartData';
import processGroupedByFieldUrl from './libraries/processGroupedByFieldUrl';

const state = {
  trafficDisordersByDistrictChartData: getDefaultDonutChartData('traffic-disorders-by-district-chart-data')
};

const getters = {
  trafficDisordersByDistrictChartData: (state) => state.trafficDisordersByDistrictChartData
};

const actions = {
  async fetchTrafficDisordersByDistrictChartData({ commit, rootState }) {
    const fieldQuery = 'address.district';
    const filterQuery = rootState.filterQuery.filterQuery.generic;
    const response = await axios.get(processGroupedByFieldUrl(fieldQuery, filterQuery));

    const trafficDisordersByDistrictChartData = processDonutChartData(
      getDefaultDonutChartData('traffic-disorders-by-district-chart-data'),
      response.data
    );

    commit('setTrafficDisordersByDistrictChartData', trafficDisordersByDistrictChartData);
  }
};

const mutations = {
  setTrafficDisordersByDistrictChartData: (state, trafficDisordersByDistrictChartData) => (state.trafficDisordersByDistrictChartData = trafficDisordersByDistrictChartData)
};

export default {
  state,
  getters,
  actions,
  mutations
}