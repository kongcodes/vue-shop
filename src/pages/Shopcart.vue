<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <div class="mui-card">
        <div
          class="mui-card-content"
          v-for="(item, i) in goodslist"
          :key="item.id"
        >
          <div class="mui-card-content-inner flex">
            <!-- 复选框 -->
            <div class="mui-input-row mui-checkbox mui-left">
              <label>&nbsp;</label>
              <input
                type="checkbox"
                v-model="getGoodsSelected[item.id]"
                @change="selectedChange(item.id, getGoodsSelected[item.id])"
                :disabled="item.num == 0"
              />
            </div>
            <!-- 中间商品图片 -->
            <img :src="item.image" />
            <!-- 右侧部分 -->
            <div class="info">
              <h1>商品{{ item.id }}</h1>
              <p class="flex">
                <span class="price">¥{{ item.price }}</span>
                <numbox
                  v-if="item.num"
                  @count="countChange"
                  :max="item.num"
                  :goodsid="item.id"
                  :initcount="getGoodsCount[item.id]"
                ></numbox>
                <span v-else style="margin-right:20px;">该商品暂时无货</span>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner balance">
            <div class="left">
              <p>总计不含运费</p>
              <p>
                已勾选商品
                <span class="red">{{ getSelectedCount }}</span> 件，总价
                <span class="red">¥{{ getSelectedAmount }}</span>
              </p>
            </div>
            <mt-button type="primary" size="small">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import numbox from "../components/numbox.vue";
export default {
  components: {
    numbox
  },
  data() {
    return {
      goodslist: []
    };
  },
  computed: {
    ...mapState("shopcart", ["car"]),
    ...mapGetters("shopcart", [
      "getGoodsCount",
      "getGoodsSelected",
      "getSelectedCount",
      "getSelectedGoods"
    ]),
    getSelectedAmount() {
      let goods = this.getSelectedGoods;
      let amount = 0;
      this.goodslist.forEach(item => {
        if (goods[item.id]) {
          amount += item.price * goods[item.id].count;
        }
      });
      return amount;
    }
  },
  created() {
    this.getGoodsList();
    // console.log(this.$store.state);
    // console.log(this.getGoodsCount);
  },
  methods: {
    getGoodsList() {
      let idArr = [];
      this.car.forEach(item => {
        idArr.push(item.id);
      });
      if (idArr.length < 0) {
        return;
      }
      this.$indicator.open({
        text: "加载中"
      });
      let params = { ids: idArr };
      this.$http.post("shopcart", params).then(res => {
        console.log(res);
        this.goodslist = res.data.data;
        // 数量为空的取消选择
        this.goodslist.forEach(item => {
          if (item.num == 0) {
            this.selectedChange(item.id, false);
          }
        });
        this.$indicator.close();
      });
      console.log(idArr);
    },
    countChange(goodsinfo) {
      // goodsinfo 为numbox组件参数 {id:'',count:''}
      // console.log(goodsinfo);
      console.log(this.car);
      this.$store.commit("shopcart/updataGoodsInfo", goodsinfo);
    },
    selectedChange(id, val) {
      console.log(id);
      this.$store.commit("shopcart/updataGoodsSelected", {
        id: id,
        selected: val
      });
    },
    remove(id, index) {
      this.goodslist.splice(index, 1);
      this.$store.commit("shopcart/removeCar", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.shopcar-container {
  background: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      align-items: center;
      padding: 10px;
      .mui-checkbox.mui-left input[type="checkbox"] {
        left: 0px;
      }
      .mui-radio.mui-left label,
      .mui-checkbox.mui-left label {
        padding-left: 20px;
        padding-right: 35px;
        padding-bottom: 22px;
      }
    }
    img {
      width: 60px;
    }
    .info {
      margin-left: 10px;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      h1 {
        font-size: 13px;
        font-weight: bold;
        line-height: 20px;
        padding-top: 10px;
      }
      p {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .price {
          text-align: left;
          font-size: 16px;
          font-weight: 700;
          color: red;
          flex: 1;
        }
        a {
          line-height: 25px;
        }
      }
    }
  }
  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red  {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
.mui-numbox {
  margin-right: 10px;
  height: 30px;
}
</style>
