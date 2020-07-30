<template>
  <apexchart
    :options="trafficDisordersByDistrictChartData.chartOptions"
    :series="trafficDisordersByDistrictChartData.series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TrafficDisordersByDistrictChart",
  components: {
    apexchart: VueApexCharts
  },
  methods: {
    ...mapActions([
      "fetchTrafficDisordersByDistrictChartData",
      "processFilterQuery"
    ])
  },
  computed: mapGetters(["trafficDisordersByDistrictChartData"]),
  created() {
    this.processFilterQuery();
    this.fetchTrafficDisordersByDistrictChartData();
  }
};
</script>

<style scoped></style>