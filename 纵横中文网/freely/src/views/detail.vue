<template>
  <div>
    <van-nav-bar
      title="详情"
      left-text="返回"
      right-text="书架"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    

  </div>
</template>
<script>
export default {
  created() {
    console.log()
    this.$http.get('/api/detail',{
      params:{
        id:this.$route.params.id
      }
    }).then(res=>{
      this.list = res.data
    })
  },
   methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      this.$router.push({
        path:'/main/bookstore'
      })
    }
  }
}
</script>
<style lang="scss">
.van-nav-bar{
  background: rgb(43, 40, 40);
  color: #fff;
  .van-nav-bar__text{
     color: #fff;
    
  }
  .van-icon{
      color: #fff !important;
    }
  .van-nav-bar__title{
    color: #fff;
  }
}
</style>
