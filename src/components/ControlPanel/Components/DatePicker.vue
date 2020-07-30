<template>
  <el-date-picker
    id="date-picker"
    v-model="datePickerData"
    type="daterange"
    range-separator="bis"
    start-placeholder="Startdatum"
    end-placeholder="Enddatum"
    format="dd-MM-yyyy"
    value-format="yyyy-MM-dd"
    @change="changeDateRange(datePickerData ? datePickerData : [null, null])"
  ></el-date-picker>
</template>

<script>
import { DatePicker } from "element-ui";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DatePicker",
  components: {
    "el-date-picker": DatePicker
  },
  data() {
    return {
      datePickerData: []
    };
  },
  methods: {
    ...mapActions([
      "fetchDistricts",
      "fetchTrafficDisorders",
      "fetchTrafficDisordersByTypeChartData",
      "fetchTrafficDisorderTypes",
      "processFilterQuery",
      "updateDateRange"
    ]),
    changeDateRange(newDateRange) {
      this.updateDateRange(newDateRange);
      this.processFilterQuery();
      this.fetchDistricts();
      this.fetchTrafficDisordersByTypeChartData();
      this.fetchTrafficDisorderTypes();
      this.fetchTrafficDisorders();
    }
  },
  computed: mapGetters(["dateRange"]),
  created() {
    this.datePickerData = [this.dateRange.startDate, this.dateRange.endDate];
  }
};
</script>

<style scoped></style>