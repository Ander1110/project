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
    <div class="booksite"  v-for="(item,index) in list" :key="index">
      <div class="bookimg">
        <img :src="item.coverUrl" alt="">
      </div>
    <div class="bookinfo">
      <h1 class="bookname">{{item.bookName}}</h1>
      <div class="info">
         <div>作者：<span>{{item.authorName}}</span></div>
         <div>分类：<span>{{item.categoryName}}</span></div>
         <div>字数：<span>{{item.bookId}}</span></div>
         <div>已有  <span>{{item.bookId}}人次</span> 读过此书</div>
       </div>				
    </div>
	  <span class="add">+加入书架</span>

    <div class="bookbutton">
			    <a>立即阅读</a>  
        <a style="border:1px solid #b33836;color:#b33836;background:#f2f2f2;margin-left:8px">客户端看免费</a>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  created() {
    console.log()
    this.$http.get('/api/detail',{
      params:{
        id:this.$route.params.id
      }
    }).then(res=>{
      this.list = res.data;
      console.log(this.list)
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

.booksite {
    margin: 0;
    padding: 15px 7px 5px;
    position: relative;
    zoom: 1;
    background: #f2f2f2;
    border-bottom: 1px solid #dfdfdf;
    .bookimg {
      float: left;
      margin-right: 10px;
      margin-bottom: 15px;
      width: 74px;
      height: 98px;
      img {
          width: 74px;
          height: 98px;
      }
    }
  .bookinfo {
    overflow: hidden;
    z-index: 2;
  }
  .add{
    position: absolute;
    right: 20px;
    top: 50px;
    font-size: 10px;
    border: 1px solid rgb(245, 123, 52);
    color: rgb(245, 123, 52);
    padding: 2px;
  }
}


.booksite .bookname {
    color: #303030;
    font-size: 14px;
    line-height: 25px;
}
.booksite .info {
    color: #787878;
    font-size: 13px;
    line-height: 18px;
}

.booksite .bookbutton {
    display: -webkit-box;
    clear: both;
    font-size: 16px;
    a {
    display: block;
    -webkit-box-flex: 1;
    line-height: 35px;
    border-radius: 2px;
    text-align: center;
    background: #b33836;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 10px;
  }
}
</style>
