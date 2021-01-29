<template>
  <div class="member">
    <div class="header-con">
      <router-link :to="{ name: 'login' }" class="mui-navigate-right">
        <div class="user-info">
          <!-- 用户信息 -->
          <div class="avatar-con">
            <div class="avatar">
              <img
                src="../assets/images/avatar_default.png"
                class="image-info"
              />
            </div>
          </div>
          <div class="person-con">
            <span>登录 / 注册</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mui-table-view .mui-media,
.mui-table-view .mui-media-body {
  line-height: 42px;
}
.mui-table-view-cell:after {
  left: 0px;
}
.member {
  margin-bottom: 15px;
  .header-con {
    padding: 10px;
    background-color: #fff;
    .user-info {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 120px;
      background: linear-gradient(90deg, #28a2ff, #ffd787);
      box-shadow: 0 0.1rem 0.25rem #f8e3c6;
      .avatar-con {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        .avatar {
          width: 60px;
          height: 60px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 15);
          border: 1px solid hsla(0, 0%, 100%, 0.4);
          border-radius: 50% 50%;
          .image-info {
            width: 100%;
            height: 100%;
          }
        }
      }
      .person-con {
        position: absolute;
        left: 90px;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
      }
    }
  }
}
</style>
