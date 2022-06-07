<template>
  <div class="userinfo">
    <div class="top">
      <img src="../../assets/images/user.png" alt="">
      <span>C冥界天河</span>
      <span>作词/作曲独立音乐人</span>
    </div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="个人中心">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="需求管理">
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="我的作品">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="4" tab="订单管理">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="5" tab="我的收藏">
        Content of Tab Pane 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<style lang="less" scoped>
.userinfo{
  .top{
    height: 420px;
    padding-top: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('../../assets/images/userBg.png') no-repeat;
    background-size: 100% 100%;
    img{
      width:142px;
      height: 142px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    span{
      font-size: 18px;
      font-weight: 600;
      display: block;
      margin: 10px 0;
    }
  }
  .ant-tabs{
    margin: 0 300px;
    margin-top: -50px;
    ::v-deep .ant-tabs-bar{
      border-bottom: 0;
      .ant-tabs-nav{
        padding-bottom: 2px;
        .ant-tabs-tab{
          color: #fff;
          padding: 5px 50px;
          &.ant-tabs-tab-active{
            border: 1px solid #fff;
            border-radius: 23px;
          }
        }
        .ant-tabs-ink-bar{
          width: 0 !important;
        }
      }
    }
    ::v-deep .ant-tabs-content{
      height: 500px;
    }
  }
}
</style>