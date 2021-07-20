<template>
  <panel-layout>
    <template slot="main">
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mb-2 mt-md-5 ml-md-5">Sinpe Móvil</h1>
      <v-row dense class="ml-md-5 mt-md-3">
        <v-col cols="12" md="5">
          <v-card class="pa-2">
            <v-card-text class="mb-0 pb-0">
              <v-form ref="sinpe" v-model="valid" lazy-validation>
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

                <!-- <v-alert v-if="msgError !== null" dense text type="error"
                  >{{ msgError }}
                </v-alert> -->
              </v-form>
            </v-card-text>
          </v-card>

          <v-row dense class="mt-2">
            <v-col cols="12">
              <v-btn color="primary" class="font-weight-bold btn-border-black texto-capitalizado px-16" small>
                Guardar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout";
import BackBtn from "../../../components/UI/BackBtnComponent";

export default {
  name: "new-sinpe-movil",
  components: { BackBtn, PanelLayout },
  data() {
    return {
      formulario: {
        nombre: null,
        telefono: null,
      },
      valid: false,
      msgError: "Datos no validos",
    };
  },
};
</script>

<style scoped>
.v-application .primary {
  background-color: #06b0d7 !important;
  border-color: black !important;
}
</style>
