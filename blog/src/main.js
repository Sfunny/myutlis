import Vue from 'vue'
import App from './App'
import router from './router'

import 'layui-src/dist/css/layui.css';
import 'font-awesome/css/font-awesome.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




