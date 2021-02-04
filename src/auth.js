let auth = {
  getAuthorization(){
    return localStorage.getItem("Authorization");
  },
  setAuthorization(Authorization){
    return localStorage.setItem("Authorization",Authorization)
  }
}
export default{
  install:function(vue){
    vue.prototype.$auth = auth
  }
}