
<template>
<v-container width="100%">
  <v-row align="center"
      justify="center">
    <v-col cols="12">
      <CatalogueSlider :images="CatalogueImages"/>
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
      <SideSlider :images="SideImages" />
    </v-col>
  </v-row>
</v-container>
</template>

<script>

import CatalogueSlider from '../components/CatalogueSlider.vue'
import SideSlider from "../components/SideSlider.vue"

  export default {

    components: {
      CatalogueSlider,
      SideSlider,
    },
    data() {
      return {
        model: 0,
        CatalogueImages: ['https://static0.tiendeo.ma/images/tiendas/56/catalogos/18816/paginas/jpg_catalogo/00003.jpg'],
        SideImages: [ 'https://static0.tiendeo.ma/images/tiendas/132/catalogos/18720/paginas/mid2/00001.jpg'],
   }
    }
  }
</script>

<style lang="scss" scoped>
@import 'node_modules/swiper/src/swiper.scss';
</style>
