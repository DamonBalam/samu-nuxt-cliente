<template>
  <panel-layout>
    <template slot="main">
      <back-btn
        color="secondary"
        text="Regresar"
      />

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card class="mt-2">
            <v-card-title>
              Sinpe Móvil
            </v-card-title>
            <v-card-text class="mb-0 pb-0">
              <v-form
                ref="sinpe"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="formulario.telefono"
                  label="Número de Teléfono"
                  filled
                  rounded
                  dense
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formulario.nombre"
                  filled
                  rounded
                  dense
                  label="Nombre completo del propietario de la cuenta"
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
              <v-btn
                block
                small
                outlined
              >
                Guardar
                <v-icon
                  small
                  left
                >mdi-content-save
                </v-icon>
              </v-btn>
            </v-card-actions>

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
  name: "new-sinpe-movil",
  components: {BackBtn, PanelLayout},
  data() {
    return {
      formulario: {
        nombre: null,
        telefono: null
      },
      valid: false,
      msgError:'Datos no validos'

    }
  },
}
</script>

<style scoped>

</style>
