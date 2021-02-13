function setItem(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}
function getItem(name) {
  return JSON.parse(localStorage.getItem(name) || "[]");
}
const state = {
  // { id: 商品id, count: 购买数量，selected: false  }
  // car 从本地缓存中 localStorage 获取到购物车中的商品
  car: getItem("car"),
  // 当前要购买的商品 buy:[{id:'',count:''}]
  // 当在购物车里点“去结算”时 就把购物车中选中的商品放进去
  // buy 表示当前要购买的商品的商品信息
  buy: getItem("buy")
};
const getters = {
  // 获取商品数量
  getGoodsCount(state) {
    let goods = {};
    state.car.forEach(item => {
      goods[item.id] = item.count;
    });
    return goods;
  },
  // 获取商品有没有选中的状态值
  getGoodsSelected(state) {
    let goods = {};
    state.car.forEach(item => {
      goods[item.id] = item.selected;
    });
    return goods;
  },
  // 获取选中商品的件数
  getSelectedCount(state) {
    let count = 0;
    state.car.forEach(item => {
      if (item.selected) count += item.count;
    });
    return count;
  },
  // 获取选中的商品
  getSelectedGoods(state) {
    let goods = {};
    state.car.forEach(item => {
      if (item.selected) goods[item.id] = item;
    });
    return goods;
  },
  // 获取要购买的商品
  getBuy(state) {
    let goods = {};
    state.buy.forEach(item => {
      goods[item.id] = item;
    });
    return goods;
  }
};
const actions = {};
const mutations = {
  addCar(state, goodsinfo) {
    let flag = false;
    state.car.some(item => {
      if (item.id == goodsinfo.id) {
        item.count += parseInt(goodsinfo.count);
        flag = true;
        return true;
      }
    });
    if (!flag) state.car.push(goodsinfo);
    setItem("car", state.car);
  },
  updataGoodsInfo(state, goodsinfo) {
    state.car.some(item => {
      if (item.id == goodsinfo.id) {
        item.count = parseInt(goodsinfo.count);
        return true;
      }
    });
    setItem("car", state.car);
  },
  updataGoodsSelected(state, info) {
    state.car.some(item => {
      if (item.id == info.id) {
        item.selected = info.selected;
        return true;
      }
    });
    setItem("car", state.car);
  },
  removeCar(state, id) {
    state.car.some((item, index) => {
      if (item.id == id) {
        state.car.splice(index, 1);
        return true;
      }
    });
    setItem("car", state.car);
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
