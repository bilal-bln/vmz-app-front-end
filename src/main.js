import Vue from 'vue';
import store from './store';

/* set up 'element-ui' */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // apply 'theme-chalk' styling to 'element-ui' components
import locale from 'element-ui/lib/locale/lang/de'; // get german 'element-ui' language component configuration

import App from './App.vue';

Vue.config.productionTip = false
Vue.use(ElementUI, { locale }); // apply german language configuration to 'element-ui' components

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')