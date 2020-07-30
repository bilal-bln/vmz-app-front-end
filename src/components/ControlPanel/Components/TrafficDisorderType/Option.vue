<template>
  <div>
    <el-option :key="'Reset'" :label="''" :value="null">{{"Zurücksetzen"}}</el-option>
    <el-option
      v-for="trafficDisorderType in trafficDisorderTypes"
      :key="trafficDisorderType._id"
      :label="trafficDisorderType.label"
      :value="trafficDisorderType._id"
    >{{trafficDisorderType.label}}</el-option>
  </div>
</template>

<script>
import { Option } from "element-ui";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TrafficDisorderTypeOption",
  components: {
    "el-option": Option
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    ...mapActions(["fetchTrafficDisorderTypes", "processFilterQuery"])
  },
  computed: mapGetters(["trafficDisorderTypes"]),
  created() {
    this.processFilterQuery();
    this.fetchTrafficDisorderTypes();
  }
};
</script>

<style scoped></style>