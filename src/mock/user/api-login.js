import Mock from "mockjs";

Mock.setup({
  timeout: "800-2000"
});
let baseURL = "http://vshop.test";
let postData = req => {
  // console.log('req----------',JSON.parse(req.body));
  let arg = JSON.parse(req.body);
  if (arg.username === "klh" && arg.password === "klh") {
    return {
      status: true,
      session_id: 12
    };
  } else {
    return {
      status: false,
      session_id: null
    };
  }
};
export default Mock.mock(`${baseURL}/login`, "post", postData);
