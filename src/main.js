import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

// auth.js文件一定要放在axios前面
import auth from './auth.js'
Vue.use(auth)

import axios from './axios.js'
Vue.use(axios)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 要用 import Mock from './mock', 不 Vue.use(Mock) 的话 eslint报错，eslint 校验加 "no-unused-vars":"off"
import './mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
