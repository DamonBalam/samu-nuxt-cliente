<template>
  <panel-layout>
    <template slot="main">
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mb-2 mt-md-5 ml-md-5">Transferencia bancaria</h1>
      <v-row dense class="ml-md-5 mt-md-3">
        <v-col cols="12" md="5">
          <v-card class="pa-2">
            <v-card-text class="mb-0 pb-0">
              <v-form ref="sinpe" v-model="valid" lazy-validation>
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

                <!-- <v-alert v-if="msgError !== null" dense text type="error"
                  >{{ msgError }}
                </v-alert> -->
              </v-form>
            </v-card-text>
          </v-card>
          <v-row dense class="mt-2">
            <v-col cols="12" md="6">
              <v-btn
                block
                small
                elevation="1"
                class="texto-capitalizado btn-border-black"
                color="primary"
              >
                Guardar
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                block
                small
                elevation="1"
                class="texto-capitalizado btn-border-black"
              >
                Guardar y añadir otro
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="5">
          <v-card
            width="100%"
            outlined
            elevation="1"
            class="d-flex pa-2 animate__animated animate__fadeInUp"
          >
            <div class="mr-auto d-flex mb-2">
              <div class="mr-4">
                <v-avatar size="100">
                  <v-icon size="80" color="primary"> mdi-bank </v-icon>
                </v-avatar>
              </div>
              <div class="my-0">
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
                    elevation="1"
                    class="btn-border-black texto-capitalizado"
                  >
                    Acciones
                    <v-icon right dark> mdi-chevron-down </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index" link>
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
import PanelLayout from "../../../layouts/panelLayout";
import BackBtn from "../../../components/UI/BackBtnComponent";
export default {
  name: "new-transferencia-bank",
  components: { BackBtn, PanelLayout },
  data() {
    return {
      valid: false,
      msgError: "Datos no validos",
      formulario: {
        nombre_bank: null,
        numero_IBAN: null,
      },
      items: [{ title: "Editar" }, { title: "Borrar" }],
    };
  },
};
</script>

<style scoped>
.v-application .primary {
  /*background-color: #1D6B41 !important;*/
  border-color: black !important;
}
</style>
