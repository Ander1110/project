<template>
  <div id="app">
    <HeaderBar />
    <FooterBar />
    <main>
      <router-view/>
      <div class="add" @click="EventClick()">+发起任务</div>
    </main>
    <Dialog v-show="isDailog" @isDailogBar = "isDailogBar"/>
  </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'
import Dialog from '@/components/Dialog'
export default {
  data() {
    return {
      isDailog:false
    }
  },
  components:{
    FooterBar,
    HeaderBar,
    Dialog
  },
  methods: {
    isDailogBar(islog){
      this.isDailog = islog;
    },
    EventClick(){
      this.isDailog = true;
    }
  },
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  .header{
    width: 100%;
    height: 45px;
  }

  #nav{
    width: 100%;
    height: 65px;
  }
  main{
    flex: 1;
    overflow: auto;
    .add{
      position: fixed;
      bottom: 30px;
      right: 20px;
      padding: 5px 30px;
      color: #fff;
      border-radius: 20px;
      background: #17573a;
    }
  }
  .dailog{
    z-index: 12;
  }
}


</style>
