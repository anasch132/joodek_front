<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="text-h5">
          Information pour {{ name }} 
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-center text-h6">
            <v-img
            class="mt-2"
            max-height="150"
            max-width="400"
            :src="LogoImage"
            >
            </v-img>
          {{ name }}<br>
           {{ city }}  <br>
             {{ phoneNumber }}   <br>
           Catalogue {{ name }}   <br>
          <p class='text-center'>Valable du {{ From }} to {{ To }}</p><br>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        
          <v-btn
            color="green darken-1"
            text
            @click="$emit('closeDiag', false)"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
      name: 'InfoDialog',
      props: ['dialog' , 'name' , 'phoneNumber' , 'From' , 'To' , 'city' , 'LogoImage'],
      methods: {
        closeDiag()
        {
          this.$emit('closeDiag')
        }
      }
  }
</script>