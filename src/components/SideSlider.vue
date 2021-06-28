
<template>

  <swiper class="swiper" :options="swiperOption" >
    <swiper-slide v-for="n in 7" :key="n">
        <v-img :src="images[0]"></v-img>
    </swiper-slide>
    
  </swiper>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
      name: 'SideSLider',
    props: {
      images: {
      type: Array,
      required: true
    }
    },
    name: 'swiper-example-pagination-progress',
    title: 'Progress pagination',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
                  effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  },

  methods: {
    imageClicked(el)
    {
      console.log(images.indexOf(el));
    }
  }

  }
</script>

<style lang="scss" scoped>
@import 'node_modules/swiper/src/swiper.scss';

 .example-3d {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;
      background-color: #2C8DFB;
      background-position: center;
      background-size: cover;
      color: white;
    }

    .swiper-pagination {
       .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: white;
      }
    }
  }
</style>
