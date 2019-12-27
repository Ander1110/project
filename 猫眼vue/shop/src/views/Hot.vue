<template>
  <div class="hot">
    <dl  v-for="(item,index) in list" :key="index">
      <dt><img :src="item.img" alt=""></dt>
      <dd>
        <p>{{item.nm}}</p>
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
    }
  },
  //生命周期
  created(){
    this.getListArr()
  }
}
</script>