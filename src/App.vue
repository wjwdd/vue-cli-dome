<template>
  <div id="app">
    
    <transition  name="slide" mode="out-in">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <my-tab></my-tab>
    <div v-show="show" class="loading">
      <pulse-loader class="sds" :loading="show" :color="color" :size="size"></pulse-loader>
      
    </div>
  </div>
</template>

<script>
import MyTab from './components/MyTab/MyTab'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import {mapState} from 'vuex';

export default {
  components: {
  	MyTab,
    PulseLoader
  },
   data(){
    return{
      color:'#fff',
      size:'13px'
    }
    
  },
  created(){
    console.log(this.$store.state.show)
  },
  computed:{

    //这里的三点叫做 : 扩展运算符
   ...mapState(['show']),
  }
  
}
</script>

<style scoped lang="scss">
 @import '~@/common/scss/base.scss';


#app {
    color: $color-theme;
    -webkit-overflow-scrolling: touch;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity .3s;
  }
  
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }
  
  .router-view {
    padding-bottom: $headerheight;
  }
  
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0);
    z-index: 1000;
    .sds {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -50px;
    }
  }
</style>
