<template>
  <div class="goods-list">
    <div class="goods-item" v-for="(item, index) in goodslist" :key="index">
      <router-link
        :to="{
          name: 'goods_info',
          params: {
            id: index,
            goodname: item.name,
            goodprice: item.price,
            goodnum: item.num
          }
        }"
      >
        <img :src="item.image" />
        <h1 class="title">商品{{ item.name }}</h1>
        <p class="info">
          <span class="price">¥{{ item.price }}</span>
          <span class="sell">剩余 {{ item.num }} 件</span>
        </p>
      </router-link>
    </div>
    <mt-button
      class="more"
      v-if="goodslist.length !== 0"
      size="large"
      @click="getMore"
    >
      加载更多
    </mt-button>
  </div>
</template>
<script>
export default {
  props: ["category_id"],
  data() {
    return {
      goodslist: [],
      pagenum: 1
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // console.log(this.category_id);
      this.$indicator.open({
        text: "加载中"
      });
      let params = { pagenum: this.pagenum, category_id: this.category_id };
      this.$http.post("/goodslist", { params: params }).then(res => {
        this.$indicator.close();
        console.log(res);
        if (res.data.code === 1) {
          if (res.data.data.length > 0) {
            this.goodslist = this.goodslist.concat(res.data.data);
          } else {
            this.$toast("列表为空");
          }
        }
      });
    },
    getMore() {
      this.getGoodsList();
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  .goods-item {
    width: calc(calc(100% / 2) - 10px);
    margin: 10px 10px 0 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      color: #333;
      margin: 10px 0;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      .price {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .sell {
        font-size: 13px;
      }
    }
  }
  .more {
    margin: 15px 0;
    font-size: 14px;
  }
  .mint-button--large {
    width: calc(100% - 10px);
  }
}
</style>
