<template>
  <div class="hot">
    <dl  v-for="(item,index) in list" :key="index">
      <dt><img :src="item.img" alt="" @click="BindEvent(item.id)"></dt>
      <dd>
        <h2>{{item.nm}}</h2>
        <p>观众评: <span style="font-weight: 600; color:#fc0;">{{item.sc}}</span></p>
        <p class="star">主演: {{item.star}}</p>
        <p>{{item.showInfo}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
// @ is an alias to /src

import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  computed: {
    //映射store中的state
    ...mapState({
      list: state => state.list
    })
  },
  methods: {
    //映射store中的actions
    ...mapActions([
      'getList'
    ]),
    getListArr(){
      this.getList()
    },
    BindEvent(id){
      this.$router.push({
        path:`/detail/${id}`
      })
    }
  },
  //生命周期
  created(){
    this.getListArr()
  }
}
</script>
<style lang="scss">
.hot{
  width: 100%;
  box-sizing: border-box;
  dl{
    width: 100%;
    height: 115px;
    display: flex;
    padding-top: 10px;
    font-size: 12px;
    dt{
      flex: 2;
      text-align: center;
      img{
        width: 64px;
        height: 90px;
      }
    }
    dd{
      flex:7;
      border-bottom: 1px solid #e6e6e6;
    }
  } 
}
</style>
