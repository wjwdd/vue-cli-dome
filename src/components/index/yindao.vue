<template>
  <div class="page">
    <div class="con">
      <img src="@img/logo.png" alt="">
      <div class="text">
        捎八面深情 曌德被四方
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

.con {
  @include wflex(column,
  center,
  center);

  img {
    margin-top: 260px;
    margin-bottom: 100px;
    width: 241px;
    height: 261px;
  }

  .text {
    font-size: 30px;
    font-family: KaiTi;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
}

</style>
