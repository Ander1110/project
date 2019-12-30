<template>
 <div>
      <div class="after">
        <router-link to="/after/work">加班</router-link>
        <router-link to="/after/vacation">休假</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>
<style lang="scss">
.after {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  box-sizing: border-box;
  :nth-child(1){
    border-radius: 20px 0 0 20px;
    border-right: none;
  }
  :nth-child(2){
    border-radius: 0 20px 20px 0;
    border-left: none;
  }
  a {
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    padding: 5px 30px;
    border: 1px solid;
    &.router-link-exact-active {
      background: #17573a;
      color: #fff;
    }
  }
}
</style>

