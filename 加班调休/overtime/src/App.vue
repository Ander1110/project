<template>
  <div id="app">
    <HeaderBar />
    <FooterBar />
    <main>
      <router-view/>
      <div class="add">+发起任务</div>
    </main>
  </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'
export default {
  components:{
    FooterBar,
    HeaderBar
  }
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
}


</style>
