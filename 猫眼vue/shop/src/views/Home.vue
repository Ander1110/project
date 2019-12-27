<template>
  <div class="home">
    <nav>
      <span>正在热播</span>
      <span>即将上映</span>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      list: state => state.list
    }),
    ...mapGetters([
      'getTotalCount'
    ])
  },
}
</script>
<style lang="scss">
.home{
  width: 100%;
  nav{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

