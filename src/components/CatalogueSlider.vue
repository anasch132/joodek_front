
<template>
  <swiper class="swiper" :options="swiperOption" >
    <swiper-slide v-for="n in 7" :key="n">
        <v-container>
          <v-row align="center"
      justify="center">
            <v-col cols="12" sm="12">
                <v-img height="800px" contain :src="images[0]" to="/"></v-img>
            </v-col>
             
          </v-row>
        </v-container>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
      name: 'CatalogueSlider',
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
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    
  }
</script>

<style lang="scss" scoped>
@import 'node_modules/swiper/src/swiper.scss';
</style>
