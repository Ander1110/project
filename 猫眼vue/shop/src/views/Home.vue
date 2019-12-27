<template>
  <div class="home">
    <nav>
      <router-link to="/home/hot">正在热播</router-link>
      <router-link to="/home/show">即将上映</router-link>
    </nav>
      <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  // mounted() {
  //   const main = document.querySelector('main');
  //   const nav = document.querySelector('nav');
  //   main.onscroll=()=>{
  //     console.log(main.scrollTop)
  //     if(main.scrollTop>45){
  //       nav.style=``
  //     }
  //   }
  // },
  created() {
    
   
  },
}
</script>
<style lang="scss">
.home{
  width: 100%;
  nav{
    display: flex;
    width: 100%;
    height: 45px;
    position: flex;
    left: 0;
    top: 45px;
    a{
      flex:1;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>

