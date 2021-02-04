<template>
  <div>商品详情</div>
</template>
<script>
export default {
  props: ["id", "goodname", "goodprice", "goodnum"],
  created() {
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      console.log(this.goodname);
    }
  }
};
</script>
