import Mock from "mockjs";
let Random = Mock.Random;

Mock.setup({
  timeout: "500-1000"
});
let baseURL = "http://vshop.test";

let dataFn = id => {
  return {
    content: Random.cparagraph(4, 8),
    create_time: "2021-01-21 21:29:11",
    delete_time: null,
    goods_category_id: 2,
    id: id,
    image: Random.image("100x100", "#50B347", "#FFF", "hello"),
    "name|+1": Random.natural(1, 100),
    "num|0-30": 2,
    "price|1000-4000": 1,
    sell_point: Random.cparagraph(2, 4),
    status: 1,
    update_time: "2021-02-01 17:56:18"
  };
};

let postData = req => {
  let reqdata = JSON.parse(req.body);
  console.log("--------参数", reqdata);
  let dataArr = reqdata.ids.map(item => {
    return dataFn(item);
  });
  return Mock.mock({
    code: 1,
    data: dataArr
  });
};

let mockdata = Mock.mock(`${baseURL}/shopcart`, "post", postData);
export default mockdata;
