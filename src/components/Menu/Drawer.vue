<template>
  <div>
    <el-button @click="drawer = true" icon="el-icon-right" circle id="drawbutton"></el-button>
    <el-drawer :title="appTitle" :visible.sync="drawer" :direction="'ltr'">
      <ControlPanelDiv id="control-panel-div" />
      <ChartPanelDiv />
    </el-drawer>
  </div>
</template>

<script>
import { Button, Drawer } from "element-ui";
import { mapGetters } from "vuex";
import ChartPanelDiv from "../ChartPanel/Div";
import ControlPanelDiv from "../ControlPanel/Div";

export default {
  name: "MenuDrawer",
  components: {
    "el-drawer": Drawer,
    "el-button": Button,
    ChartPanelDiv,
    ControlPanelDiv
  },
  data() {
    return {
      drawer: false
    };
  },
  computed: mapGetters(["appTitle"])
};
</script>

<style scoped>
#drawbutton {
    position: fixed;
    left: 10px;
    top: 10px;
}
</style>