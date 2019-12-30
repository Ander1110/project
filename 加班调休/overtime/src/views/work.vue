<template>
  <div class="work">
    <div class="box" v-for="(item,index) in pendList" :key="index">
      <p>{{item.id}}</p>
      <span>申请人 <b>{{item.name}}</b></span>
      <span>加班类型  <b>{{item.work}}</b></span>
      <span>加班日期  <b>{{item.time}}</b></span>
      <span>加班时数  <b>{{item.house}}</b></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carList:[],
      pendList:[]
    }
  },
  created() {
    this.getData();
    
    
  },
  methods: {
    getData() {
      this.$http.get('/api/shop').then(res=>{
        this.carList=res.data.list.data.list;
        this.carList.map(item=> {
          if(item.type=="待处理"){
            this.pendList = item.menu;
          }
        })
      })
    }
  },
}
</script>
<style lang="scss">
.work{
  width: 100%;
  .box{
    width: 100%;
    height: 100px;
    padding: 5px;
    color: #ccc;
    span{
      text-align: center;
      display: inline-block;
      width: 50%;
      b{
        color: #000;
      }
    }
  }
}
</style>
