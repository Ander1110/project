<template>
     <div id="nav">
      <router-link to="/"><van-icon name="underway"  size="40"/><span>待处理</span></router-link>
      <router-link to="/being"><van-icon name="question"  size="40"/><span>待处中</span></router-link>
      <router-link to="/after"><van-icon name="checked"  size="40"/><span>待处后</span></router-link>
    </div>
</template>
<style lang="scss">
#nav {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  i{
    color: #ccc;
  }
  a {
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    &.router-link-exact-active {
      color: #17573a;
      i{
        color: #17573a;
      }
    }
  }
}
</style>
