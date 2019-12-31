<template>
  <div>
    <SwiperBar :swiperlist = "swiperlist"/>
    <div class="home-fenlei">
      <div class="left"> <router-link to="/tab1">免费专区</router-link></div>
      <div class="right"><router-link to="/tab2">女频精选</router-link></div>
    </div>

    <div class="box" v-for="(item,index) in list" :key="index" @click="EventClick(item)">
      <div class="img"><img :src="item.coverUrl" alt="宋疆"/></div>
      <div class="content">
        <h3>{{item.bookName}}</h3>
        <div class="desc">{{item.description}}</div>
        <div class="other">
            <i class="author">{{item.authorName}}</i>
            <i class="item-label">架空历史</i>
            <i class="item-state">连载</i>
        </div>
      </div>
    </div>               
  </div>   	 	
</template>
<script>
import SwiperBar from '@/components/SwiperBar'
export default {
  data() {
    return {
      swiperlist:[],
      list:[]
    }
  },
  components:{
    SwiperBar
  },
  created() {
    this.$http.get('/api/swiperlist').then(res=>{
      this.swiperlist = res.data
    })

    this.$http.get('/api/list').then(res=>{
      this.list = res.data.ranklist0
      console.log(this.list)
    })
  },
  methods: {
    EventClick(item){
      this.$router.push({
        path:`/detail/${item.bookId}`
      })
    }
  },
}
</script>
<style lang="scss">
.home-fenlei{
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  .left{
    flex: 1;
   a{
      display: inline-block;
      line-height: 42px;
      width: 172px;
      height: 42px;
      border-radius: 10px;
      text-align: center;
      color: #fff;
      background: #82a9e1;
   }
  }
  .right{
    flex:1;
    a{
      display: inline-block;
      width: 172px;
      height: 42px;
      line-height: 42px;
      border-radius: 10px;
      text-align: center;
      color: #fff;
      background: #d4b8d6;
    }
  }
}

.box{
  width: 100%;
  height: 130px;
  display: flex;
  font-size: 12px;
  .img{
    text-align: center;
    flex: 3;
    img{
      width: 68px;
      height: 89px;
    }
  }
  .content{
    flex:7;
    margin-right: 15px;
    .desc{
          line-height: 0.9rem;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-bottom: 0.3rem;
          height: 1.8rem;
    }
    .other{
      display: flex;
      margin-top: 10px;
      .author{
        flex:6;
      }
    }
    i{
      font-style:normal;
    }
    .item-label {
      flex:2 ;
      color: #fff;
      background: #d1acd8;
      padding: 0 3px;
      border-radius: 2px;
    }
    .item-state {
      flex:1;
      background: #a1d0d2;
      margin-left: 0.5rem;
      color: #fff;
    }
  }
}
</style>
