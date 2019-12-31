<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in swiperlist" :key="index"><img :src="item" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    props:{
      swiperlist: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="scss">
.swiper-container{
  width: 100%;
  height: 146px;
  .swiper-slide{
    width: 100%;
  height: 146px;
    img{
      width: 375px;
        height: 146px;
    }
  }
}
</style>
