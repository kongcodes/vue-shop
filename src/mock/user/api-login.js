import Mock from 'mockjs'

Mock.setup({
  timeout:300-800
})
let baseURL = 'http://vshop.test'
let postData = req =>{
  // console.log('req----------',JSON.parse(req.body));
  let arg = JSON.parse(req.body);
  if(arg.username === "klh" && arg.password === "klh"){
    return true
  }else{
    return false
  }
}
export default Mock.mock(`${baseURL}/login`, 'post', postData);