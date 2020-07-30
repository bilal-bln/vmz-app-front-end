import Vue from 'vue';
import Vuex from 'vuex';

import appTitleProperties from './modules/appTitleProperties';
import currentlyOpenPopupId from './modules/currentlyOpenPopupId';
import dateRange from './modules/dateRange';
import districts from './modules/districts';
import filterQuery from './modules/filterQuery';
import leafletMapProperties from './modules/leafletMapProperties';
import preloadedTrafficDisorderData from './modules/preloadedTrafficDisorderData';
import selectedDistrict from './modules/selectedDistrict';
import selectedTrafficDisorderType from './modules/selectedTrafficDisorderType';
import trafficDisorders from './modules/trafficDisorders';
import trafficDisordersByTypeChartData from './modules/trafficDisordersByTypeChartData';
import trafficDisordersByDistrictChartData from './modules/trafficDisordersByDistrictChartData';
import trafficDisorderTypes from './modules/trafficDisorderTypes';

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        appTitleProperties,
        currentlyOpenPopupId,
        dateRange,
        districts,
        filterQuery,
        leafletMapProperties,
        preloadedTrafficDisorderData,
        selectedDistrict,
        selectedTrafficDisorderType,
        trafficDisorders,
        trafficDisordersByDistrictChartData,
        trafficDisordersByTypeChartData,
        trafficDisorderTypes
    }
});