<template>
  <div class="nav">
    <router-link to="/main/home">首页</router-link>
    <router-link to="/main/classity">分类</router-link>
    <router-link to="/main/ranking">排行</router-link>
    <router-link to="/main/bookstore">书架</router-link>
  </div>
</template>
<style lang="scss">
.nav{
  width: 100vw;
  height: 45px;
  background: rgb(43, 40, 40);
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    padding: 10px 30px;
    color: #fff;
    &.router-link-exact-active {
      background: rgb(78, 68, 65);
    }
  }
}
</style>
