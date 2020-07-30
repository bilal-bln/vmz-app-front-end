<template>
  <apexchart
    :options="trafficDisordersByTypeChartData.chartOptions"
    :series="trafficDisordersByTypeChartData.series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TrafficDisordersByTypeChart",
  components: {
    apexchart: VueApexCharts
  },
  methods: {
    ...mapActions([
      "fetchTrafficDisordersByTypeChartData",
      "processFilterQuery"
    ])
  },
  computed: mapGetters(["trafficDisordersByTypeChartData"]),
  created() {
    this.processFilterQuery();
    this.fetchTrafficDisordersByTypeChartData();
  }
};
</script>

<style scoped></style>