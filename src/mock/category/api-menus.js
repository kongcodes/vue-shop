import Mock from "mockjs";
import menuJSON from "./menus.js";

Mock.setup({
  timeout: "500-1000"
});
let baseURL = "http://vshop.test";
let postData = () => {
  return menuJSON;
};

export default Mock.mock(`${baseURL}/category`, "post", postData);
