<template>
  <div class="page">
    <div class="con ">
      <img class="logo" src="@img/logo.png" alt="">
      <div class="from">
        <div class="item">
          <i class="iconfont icon-shouji "></i>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div class="item">
          <i class="iconfont icon-yuechi_o"></i>
          <input type="text" placeholder="请输入用户名">
        </div>
      </div>
      <div class="jizhuwangji">
        <div class="jizhu">
          记住密码
        </div>
        <div class="wangji">
          忘记密码?
        </div>
      </div>
      <div class="bbtn">
        <div class="btn">
          登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      infor: {},

    }
  },
  created() {

  },
  computed: {

  },
  watch: {

  },
  methods: {



  },
  mounted() {

  }
}

</script>
<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';
@import '~@/common/scss/common.scss';

// @include wflex(row,
// space-between,
// center);
.con {
  @include wflex(column,
  center,
  center);

  .logo {
    width: 153px;
    margin-top: 188px;
  }

  .from {
    margin-top: 171px;

    .item {
      margin-top: 35px;
      padding: 15px 20px;
      width: 510px;
      // height: 66px;
      border: 2px solid rgba(179, 179, 179, 1);
      border-radius: 5px;

      i {
        margin-right: 20px;
      }

      input {
        height: 100%;
      }
    }

  }

  .jizhuwangji {
  	
    margin-top: 10px;
    width: 510px;
    @include wflex(row,
    space-between,
    center);
  }
  .bbtn{
  	width: 510px;
  	margin-top: 83px;
  }
}

</style>
