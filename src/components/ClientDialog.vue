<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogClient"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5" color="blue">
          Joodek Newsletter Subscription 
           <v-spacer></v-spacer>
             <v-btn
            color="red darken-1"
            icon
            text
            @click="$emit('closeDialogClient', false)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
       
        <v-divider></v-divider>

        <v-card-text class="text-center text-h5 black--text">
            Inscrivez-vous gratuitement et recevez des offres spéciales et de nouveaux catalogues à {{ name }} dans {{ city }}!

    <v-checkbox
      v-model="checkbox"
      label="Je tiens également à recevoir les catalogues de la catégorie Supermarchés"
    ></v-checkbox>
    <v-text-field
            label="Email"
            prepend-icon="mdi-at"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outline color="blue" class="ma-2">

            <v-icon color="white">mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
      name: 'ClientDiag',
      props: ['dialogClient' , 'name' , 'city'],
      methods: {
        closeDiag()
        {
          this.$emit('closeDiag')
        }
      },
      data () {
      return {
        checkbox: true,
      }
    },
  }
</script>