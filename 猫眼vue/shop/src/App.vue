<template>
  <div id="app">
      <header>猫眼电影</header>
      <main><router-view/></main>
      <FooterBar />
  </div>
</template>
<script>
import FooterBar from './components/FooterBar'
export default {
  components:{
    FooterBar
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header{
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: #ca361c;
    color: #fff;
  }
  main{
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100vw;
    height: 45px;
  }
}

</style>
