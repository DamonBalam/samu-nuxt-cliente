<template>
<panel-layout>
  <template slot="main">
    <back-btn color="secondary" text="Regresar" />
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card class="mt-2">
          <v-card-title>
            Transferencia Bancaria
          </v-card-title>
          <v-card-text class="mb-0 pb-0">
            <v-form
              ref="sinpe"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="formulario.nombre_bank"
                label="Nombre del Banco"
                filled
                rounded
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="formulario.numero_IBAN"
                filled
                rounded
                dense
                label="Número IBAN"
                required
              ></v-text-field>

              <v-alert
                v-if="msgError !== null"
                dense
                text
                type="error"
              >{{ msgError }}

              </v-alert>
            </v-form>
          </v-card-text>

          <v-card-actions class="mt-0 pt-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-btn
                  block
                  small
                  outlined
                  color="primary"
                >
                  Guardar
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn
                  block
                  small
                  outlined
                >
                  Guardar y Añadir Otro

                </v-btn>
              </v-col>
            </v-row>

          </v-card-actions>

        </v-card>
      </v-col>


      <v-col
        cols="6"
        md="6"
      >
        <v-card
          width="100%"
          outlined
          flat
          class="d-flex flex-column  flex-md-row pa-2 mt-2 animate__animated animate__fadeInUp"
        >
          <div class="mr-auto d-flex mb-2">
            <div class="mr-4">
              <v-avatar
                size="100"
              >
                <v-icon
                  size="80"
                  color="primary"
                >
                  mdi-bank
                </v-icon>
              </v-avatar>
            </div>
            <div class=" my-0">
              <p class="my-0">Transferencia Bancaria</p>
              <p class="my-0 mb-1">Jonathan Martinez</p>
              <p class="my-0 mb-1">88888</p>
            </div>
          </div>

          <div class="d-flex align-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  small
                  outlined
                  block
                >
                  acciones
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  link
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </template>
</panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout"
import BackBtn from "../../../components/UI/BackBtnComponent"
export default {
  name: "new-transferencia-bank",
  components: {BackBtn, PanelLayout},
  data() {
    return {
      valid:false,
      msgError:'Datos no validos',
      formulario: {
        nombre_bank: null,
        numero_IBAN:null
      },
      items: [
        {title: 'Editar'},
        {title: 'Borrar'},
      ]
    }
  },
}
</script>

<style scoped>

</style>
