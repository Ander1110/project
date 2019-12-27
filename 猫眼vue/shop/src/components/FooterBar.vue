<template>
  <div class="footer">
    <router-link to="/">影院</router-link>
    <router-link to="/about">电影</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>
<style lang="scss">
#nav {
  padding: 30px;
  
}
.footer{
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>
