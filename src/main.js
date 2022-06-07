import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './themecss/variable.css'
import './assets/iconfont/iconfont.css'

import router from './router/index'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Antd)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
