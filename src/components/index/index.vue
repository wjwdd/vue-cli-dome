<template>
  <div>
    <i class="iconfont icon-bianji"></i>
    <i class="iconfont icon-shouji"></i>
    <yd-popup v-model="show" position="bottom" height="60%">
      <div class="header">
        <div class="title">
          安全中心
        </div>
        <i class="close iconfont icon-guanbi1"></i>
      </div>
      <div class="four">
        <div class="item" v-for="item in lists">
          <div class="tubiao">
            <i class="iconfont" :class="item.class"></i>
          </div>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
      <div class="shouce">
        <div class="header">
          紧急救护手册
        </div>
        <div class="nr">
          <div class="xnr">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </div>
          <div class="xheader">
          	<i class="sc iconfont icon-shoucang"></i>
            如何设置紧急联系人
          </div>
          <div class="xnr">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        </div>
      </div>
    </yd-popup>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      show: true,
      lists: [{ class: 'icon-baojing', name: '一键报警' }, { class: 'icon-jiuhuche', name: '一键救援' }, { class: 'icon-baoxian', name: '车险报警' }, { class: 'icon-jiuyuan', name: '道路救援' }]
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

.header {
  padding: 30px 20px;
  position: relative;

  .title {
    font-size: 40px;


  }

  .close {
    position: absolute;
    top: 30px;
    right: 20px;
  }
}

.four {
  padding: 20px 30px;
  @include wflex(row,
  space-between,
  center);

  .item {
    .tubiao {
      width: 100px;
      height: 100px;
      background: #e36863;
      border-radius: 100%;

      color: #fff;
      @include wflex(column,
      center,
      center);

      i {
        font-size: 50px;
      }
    }

    .name {
      font-size: 24px;
      margin-top: 20px;
    }
  }


}

.shouce {
  .header {
    margin: 30px 0;
    border-left: 10px solid #ddbd8f;
    padding: 0px 40px;
    font-size: 40px;
  }

  .nr {
    padding: 0 50px;
    font-size: 24px;
    color: #74777e;
    line-height: 30px;
    .xheader{
    	padding:20px 0;
    	font-size: 30px;
    color: #333;
    .sc{
    	color:#fdba58;
    }
    }
  }
}

</style>
