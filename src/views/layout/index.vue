<template>
  <a-layout>
      <a-layout-header>
        <span>音乐邦</span>
        <a-menu v-model="activeKey" mode="horizontal">
          <a-menu-item key="home">首页</a-menu-item>
          <a-menu-item key="app">全部曲库</a-menu-item>
        </a-menu>
        <div class="search">
          <a-input placeholder="新裤子乐队" />
          <i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
        <div class="userinfo">
          <a-dropdown>
            <span>C冥界天河</span>
            <a-menu slot="overlay">
              <a-menu-item>
                <span @click="handleJump"><i class="iconfont icon-yonghu"></i>账户信息</span>
              </a-menu-item>
              <a-menu-item>
                <span><i class="iconfont icon-yonghu"></i>我的需求</span>
              </a-menu-item>
              <a-menu-item>
                <span><i class="iconfont icon-yonghu"></i>我的作品</span>
              </a-menu-item>
              <a-menu-item>
                <span><i class="iconfont icon-dingdan"></i>我的订单</span>
              </a-menu-item>
              <a-menu-item>
                <span><i class="iconfont icon-shoucang"></i>我的收藏</span>
              </a-menu-item>
              <a-menu-item>
                <span><i class="iconfont icon-logout"></i>登出</span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <img src="" alt="">
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <div class="footer"></div>
        <div>
          
        </div>
      </a-layout-footer>
    </a-layout>
</template>
<script>
export default {
  data() {
    return {
      activeKey: ["home"],
    };
  },
  methods: {
    handleJump () {
      this.$router.push('/userinfo')
    }
  }
};
</script>
<style lang="less" scoped>
.ant-layout-header{
  padding: 0 300px;
  background: #fff;
  display: flex;
  color: var(--secondary-color);
  >span{
    margin-right: 20px;
  }
  .ant-menu{
    line-height: 64px;
    flex: 1;
    .ant-menu-item{
      border-bottom: none;
      color: var(--secondary-color);
      &:hover,&-selected{
        background: var(--primary-color);
        color: #fff;
        border: none;
      }
    }
  }
  .search{
    .ant-input{
      border-left: none;
      border-top: none;
      border-right: none;
      box-shadow: none;
      border-radius: 0;
      width: 100px;
    }
    i{
      cursor: pointer;
      color: var(--secondary-color);
      font-weight: 600;
      font-size: 18px;
      &:last-child{
        margin: 0 40px;
      }
    }
  }
  .userinfo{
    cursor: pointer;
    img{
      width: 34px;
      height: 34px;
      border-radius: 50%;
      margin-left: 20px;
    }
  }
}
.ant-layout-footer{
  padding: 0;
  .footer{
    height: 300px;
    background: url('../../assets/images/footer.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>
<style lang="less">
  .ant-dropdown-menu{
    &-item{
      color: var(--secondary-color);
      font-size: 12px;
      padding: 10px 20px;
      &:not(:last-child){
        border-bottom: 1px solid #E5E5E5;
      }
      i{
        margin-right: 5px;
      }
    }
  }
</style>
