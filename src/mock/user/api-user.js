import Mock from "mockjs";

Mock.setup({
  timeout: "800-2000"
});
let baseURL = "http://vshop.test";
let postData = () => {
  return {
    code: 0,
    data: null
  };
};

export default Mock.mock(`${baseURL}/user`, "post", postData);
