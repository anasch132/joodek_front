<template>
  <v-app id="inspire">
      <fullscreen :fullscreen.sync="fullscreen" >
    
  <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      width="400"
    >
      <v-list
        nav
      >

      <v-list-item>

        <v-list-item-title class="text-center text-h4">
          {{ title }}
        </v-list-item-title>

      </v-list-item>
  <v-divider class="mb-3"></v-divider>

      <!-- map -->
      <v-list-item
      v-if="map">
<GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
</GmapMap>
      </v-list-item>
      <!-- search -->
        <v-list-item
        v-if="search"
        >
            <v-text-field
            v-model="searchInput"
            solo
            append-icon="mdi-search-web"
            label="Search"
            clearable
          ></v-text-field>
        </v-list-item>

  <!-- catalogue images -->
        <v-list-item-group
        v-if="images"
        active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-img
      height="250"
      src="https://static0.tiendeo.ma/images/tiendas/56/catalogos/18816/paginas/jpg_catalogo/00001.jpg"
    ></v-img>
          </v-list-item>

          <v-list-item>
            <v-img
      height="250"
      src="https://static0.tiendeo.ma/images/tiendas/56/catalogos/18816/paginas/jpg_catalogo/00002.jpg"
    ></v-img>
          </v-list-item>

          <v-list-item>
           <v-img
      height="250"
      src="https://static0.tiendeo.ma/images/tiendas/56/catalogos/18816/paginas/jpg_catalogo/00003.jpg"
    ></v-img>
          </v-list-item>

          <v-list-item>
            <v-img
      height="250"
      src="https://static0.tiendeo.ma/images/tiendas/56/catalogos/18816/paginas/jpg_catalogo/00004.jpg"
    ></v-img>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app
    :color="CatalogueColor">
       <v-btn icon class="mr-2">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
     
      <v-toolbar-title>{{ shopTitle }}</v-toolbar-title>
       <v-spacer></v-spacer>
      <v-btn icon >
        <v-icon v-if="Nonfav" @click="addFav">mdi-heart-outline</v-icon>
        <v-icon v-if="fav" @click="removeFav" color="red">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon @click="toggle">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>

       <v-btn icon @click="fireDialogClients()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-main >
      <!-- INfo -->
      <v-container class="mt-lg-8">
      <InfoDialog :dialog="dialog" v-on:closeDiag="closeDiag()"
      name="Marjane" 
      city="casablanca" 
      From="01/06/2021" 
      To="01/07/2021"
      phoneNumber="+212098765476"
      LogoImage="https://picsum.photos/seed/picsum/200/300" />

      <!-- subscription -->
      <ClientDiag :dialogClient="dialogClient" v-on:closeDialogClient="closeDialogClient()"
      name="Marjane" 
      city="casablanca"  />
      <router-view>
      </router-view>



     
      </v-container>
    </v-main>

      </fullscreen>
    
<v-card id="create">
     <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      transition="slide-x-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn icon @click="openSearch">
              <v-icon>
                mdi-magnify
                </v-icon>
                </v-btn>
            </v-list-item-title>
</v-list-item>
  <v-list-item
        >
            <v-list-item-title>
            <v-btn icon @click="openMap">
              <v-icon color="green darken-1">
                mdi-map-marker
                </v-icon>
                </v-btn>
            </v-list-item-title>
</v-list-item>
  <v-list-item
        >
            <v-list-item-title>
            <v-btn icon @click="openPages">
              <v-icon color="red lighten-1">
                mdi-view-carousel
                </v-icon>
                </v-btn>
            </v-list-item-title>
</v-list-item>
  <v-list-item
        >
            <v-list-item-title>
            <v-btn icon @click="fireDialog">
              <v-icon color="blue darken-4">
                mdi-information-outline
                </v-icon>
                </v-btn>
            </v-list-item-title>
        </v-list-item>
      </v-list>
      </v-speed-dial>
</v-card>
  </v-app>
</template>

<script>

import InfoDialog from "./components/InfoDialog.vue"
import ClientDiag from "./components/ClientDialog.vue"

  export default {
    data: () => ({ 
      drawer: null,
       loading: false,
       fullscreen: false,
       search: false,
       fab: false,
       dialog: false,
       searchInput: '',
       map: false,
       fav: false,
       dialogClient: false,
       CatalogueColor: 'blue lighten-3',
       Nonfav: true,
       shopTitle: 'Marjane',
       title: '',
       images: false,
       items: [
        { title: 'Click Me' ,  },
        { title: '' , icon: 'mdi-plus'},
        { title: '' , icon: 'mdi-plus'},
        { title: 'Click Me 2' },
      ],
      selection: 1,
     }),
     components:{
       InfoDialog,
       ClientDiag
     },
     methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },

      openPages()
      {
        
        this.title = 'Pages'
        this.images = true
        this.search = false
        this.map = false
        this.drawer = true;
      },

        openSearch()
      {
        this.title = 'Search'
        this.images = false
        this.search = true
        this.map = false
        this.drawer = true;
      },
        openMap()
      {
        this.title = 'Map'

        this.images = false
        this.search = false
        this.map = true
        this.drawer = true;
      },
        fireDialog()
      {
        this.dialog = true;
      },
      closeDiag()
      {
        this.dialog = false;
      },
      toggle () {
        this.fullscreen = !this.fullscreen
      },

      addFav()
      {
        this.fav = true;
        this.Nonfav = false;
      },
      removeFav()
      {
        this.fav = false;
        this.Nonfav = true;
      },
      fireDialogClients() {
        this.dialogClient = true;
      },
      closeDialogClient() {
        this.dialogClient = false;
      }
    },
  }
</script>

<style scoped>
#create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: fixed;
  }
</style>