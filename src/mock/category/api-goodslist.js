import Mock from "mockjs";
let Random = Mock.Random;

Mock.setup({
  timeout: "500-1000"
});
let baseURL = "http://vshop.test";

let postData = req => {
  let reqdata = JSON.parse(req.body);
  reqdata = reqdata.params;
  console.log("--------参数", reqdata);
  return Mock.mock({
    code: 1,
    "data|10": [
      {
        album: "",
        content: "",
        create_time: "2021-01-21 21:29:11",
        delete_time: null,
        goods_category_id: 2,
        id: 100,
        image: Random.image("100x100"),
        "name|+1": Random.natural(1, 100),
        "num|0-30": 0,
        "price|1000-4000": 1,
        sell_point: "",
        status: 1,
        update_time: "2021-02-01 17:56:18"
      }
    ]
  });
};

let mockdata = Mock.mock(`${baseURL}/goodslist`, "post", postData);
export default mockdata;
