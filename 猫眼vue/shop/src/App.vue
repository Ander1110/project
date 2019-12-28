<template>
  <div id="app">
      <header v-show="isShowHeader">猫眼电影</header>
      <main><router-view/></main>
      <FooterBar v-show="isShowFooter" />
  </div>
</template>
<script>
import FooterBar from './components/FooterBar'
export default {
  data() {
    return {
      isShowHeader:true,
      isShowFooter:true
    }
  },
  components:{
    FooterBar
  },
  watch: {
    //监听路由
    //to代表去哪 from代表来自
    //to.name是你要跳转的路由
    '$route'(to,from,next){
      if(to.name=='Detail'||to.name=='login'){
        this.isShowHeader=false;
        this.isShowFooter=false;
      }else{
        this.isShowHeader=true;
        this.isShowFooter=true;
      }
    }
  },
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
    background: #ef4238;
    color: #fff;
  }
  main{
    flex: 1;
    overflow: auto;
  }
  
}

</style>
