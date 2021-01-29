<template>
  <div class="container">
    <mt-header fixed :title="$route.meta.title">
      <span slot="left" @click="goBack" v-show="showBack">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar.vue";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      showBack: false
    };
  },
  created() {
    this.showBack = this.$route.path !== "/home";
    console.log(this.$route);
    console.log(this.$router);
  },
  watch: {
    "$route.path"(newVal) {
      this.showBack = newVal !== "/home";
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
// 动画
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
