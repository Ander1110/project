<template>
  <div>
    <van-nav-bar
      title="详情"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <dl  v-for="(item,index) in detial" :key="index">
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
import { Toast } from 'vant';
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      detial:[]
    }
  },
  computed: {
    getDetailList(){
      return this.$store.state.list
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  },
  //生命周期
  created(){
    this.detial = this.getDetailList.filter(item =>{
      return  item.id === this.$route.params.id*1
    } );
    
  }
}
</script>
