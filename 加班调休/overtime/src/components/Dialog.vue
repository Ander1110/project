<template>
  <div class="dailog">
    <div class="mask" @click="EventBind()"></div>
    <div class="content">
      <div>
        <div class="work"></div>
        <p>加班</p>
      </div>
      <div>
        <div class="vacation"></div>
        <p>休假</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDailog:false
    }
  },
  methods: {
    EventBind(){
      this.$emit('isDailogBar',this.isDailog);
    }
  },
}
</script>
<style lang="scss">
.dailog{
  width: 100%;
  height: 100%;
  position: fixed;
  left:0;
  top: 0;
  .mask{
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .3;
    position: absolute;
    left:0;
    top: 0;
  }
  .content{
    width: 100%;
    height: 130px;
    background: #fff;
    position: absolute;
    left:0;
    bottom: 0;
    border-radius: 30px 30px 0 0 ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .work{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: lightcoral;
    }
    .vacation{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: lightgreen;
    }
  }
}
</style>
