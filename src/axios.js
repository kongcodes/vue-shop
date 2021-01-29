import axios from 'axios'
import config from './config.js'
export default {
  install: function (vue) {
    var obj = axios.create({
      baseURL: config.baseURL
    })
    vue.prototype.$http = obj
  }
}