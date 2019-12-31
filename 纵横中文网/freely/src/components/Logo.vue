<template>
  <div class="home">
    <div class="head">
      <div class="head_logo"><img src="http://rcode.zongheng.com/v2018/images/logo.png" alt=""></div>
      <div class="head_ulnk">
          <van-icon name="search" />
          <a class="but_client" href="">客户端</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  }
}
</script>
<style lang="scss">
.head {
  height: 46px;
  overflow: hidden;
  .head_logo {
    float: left;
    background-size: 150px;
    height: 28px;
    width: 150px;
    margin: 8px 10px;
    img{
      height: 25px;
    }
  } 
  .head_ulnk {
    line-height: 25px;
    margin-right: 10px;
    font-size: 14px;
    position: absolute;
    right: 0;
    top: 10px;
    .head_ulnk a.but_search {
      height: 25px;
      color: #5e5e5e;
    }
    .but_client {
      color: #666;
      padding-left: 10px;
      margin-left: 5px;
      border-left: 1px solid #d3d3d3;
    }
  }
}
</style>

