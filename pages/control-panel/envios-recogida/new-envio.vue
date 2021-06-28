<template>
  <panel-layout>
    <template slot="main">
      <back-btn
        color="secondary"
        text="regresar"
      />

      <v-row>
        <v-col cols="12" md="8">
          <v-card width="100%" flat class="mt-2">
            <v-card-title>
              Nuevo Método de Envío
            </v-card-title>
            <v-card-text>
              formulario
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                small
                outlined
              >
                Guardar

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
  name: "new-envio",
  components: {BackBtn, PanelLayout}
}
</script>

<style scoped>

</style>
