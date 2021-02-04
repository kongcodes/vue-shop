import axios from 'axios'
import config from './config.js'
export default {
  install: function (vue) {
    let auth = vue.prototype.$auth;
    let obj = axios.create({
      baseURL: config.baseURL
    })
    obj.interceptors.request.use(function(config){
      config.headers.Authorization = auth.getAuthorization();
      return config;
    })
    vue.prototype.$http = obj
  }
}