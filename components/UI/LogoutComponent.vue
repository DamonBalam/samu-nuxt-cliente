<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        block
        text
        @click.prevent="dialog=true"
      >
        <v-icon
          class="mr-2"
          color="error"
        >mdi-power
        </v-icon>
        Cerrar Sesión
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        Cerrar Sesión
      </v-card-title>
      <v-card-text>¿Estas seguro que deseas cerrar sesión?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          text
          @click="dialog = false"
        >Cancelar
        </v-btn>
        <v-btn
          color="primary"
          @click="logout"
        >
          Aceptar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import {mapActions} from "vuex"

export default {
  name: 'Logout',
  data: () => ({
    dialog: false,
  }),
  methods: {
    ...mapActions({authLogout: 'auth/logout'}),
    logout() {
      this.authLogout()
    }
  }
}
</script>
