<template>
  <div class="home">
    <div class="download-app-bar">
      <img class="img noneBg logo" alt="logo" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" width="42" height="42">
      <div class="app-name-desc">
        <div class="app-name">猫眼</div>
        <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
      </div>
      <div class="btn-open-app">立即打开</div>
    </div>
    <nav>
      <router-link to="/home/hot"><span>正在热播</span></router-link>
      <router-link to="/home/show"><span>即将上映</span></router-link>
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
  .download-app-bar {
    position: relative;
    height: 63px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    img.logo {
      position: absolute;
      left: 15px;
      top: 11px;
      width: 44px;
      height: 44px;
    }
    .app-name-desc {
        position: absolute;
        left: 66px;
        top: 13px;
        .app-name {
          font-size: 17px;
          color: #222;
          line-height: 23px;
        }
        .app-desc {
          font-size: 12px;
          color: #999;
        }
      }
      .btn-open-app {
        position: absolute;
        right: 15px;
        top: 17px;
        width: 68px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #ef4238;
        border-radius: 3px;
        font-size: 13px;
        color: #fff;
    }
  } 
  nav{
    display: flex;
    width: 100%;
    height: 45px;
    position: flex;
    left: 0;
    top: 45px;
    border-bottom: 1px solid #e6e6e6;
    a{
      flex:1;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      box-sizing: border-box;
      span{
        padding-bottom: 20px;
      } 
      &.router-link-exact-active {
        color: #42b983;
        span{
          border-bottom: 2px solid #ef4238;
        }
      }
    }
  }
}
</style>

