<template>
  <div class="my-tab">
    <router-link tag="div" class="tab-item" :to="{ name: 'index' }">
      <img class="img1" src="@/assets/shouye.png" alt="" />
      <img class="img2" src="@/assets/shouye-active.png" alt="" />
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ name: 'xiaoxi' }">
      <img class="img1" src="@/assets/xiaoxi.png" alt="" />
      <img class="img2" src="@/assets/xiaoxi-active.png" alt="" />
      <span class="tab-link">消息</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ name: 'mine' }">
      <img class="img1" src="@/assets/mine.png" alt="" />
      <img class="img2" src="@/assets/mine-active.png" alt="" />
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import '~@/common/scss/const.scss';
  .my-tab {
    box-shadow:0px -5px 5px 0px rgba(0,0,0,0.05);
    width: 100%;
    position: fixed;
    background: #FBFBFB;
    bottom: 0px;
    display: flex;
    height: 98px;
    z-index:100;
    font-size: $font-size-18;
      font-weight: Medium;

    .tab-item {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
        margin-bottom: 9px;
      }
      .img1 {
        display: block;
      }
      .img2 {
        display: none;
      }
      .tab-link {
        padding-bottom: 5px;
        color:  $color-text;
      }
      &.router-link-active {
        .tab-link {
        
          color:  $color-theme;
          
        }
        .img1 {
          display: none;
        }
        .img2 {
          display: block;
        }
      }
    }
  }
</style>