<template>
  <panel-layout>
    <template slot="main">
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mb-2 mt-md-5 ml-md-5">Recogida en la tienda física</h1>

      <v-row dense class="ml-md-5 mt-md-5">
        <v-col cols="12" md="6">
          <v-card width="100%" class="pa-2">
            <v-card-text>
              <v-form ref="new-recogida">
                <label class="d-block font-weight-bold black--text subtitle-1"
                  >Instrucciones detalladas para los clientes
                </label>
                <span style="font-size: 14px"
                  >Describa detalladamente la manera en que los clientes pueden
                  recoger su pedido en la tienda
                </span>

                <v-text-field class="mt-2" label="Ubicación(s) de la tienda:" filled rounded dense required></v-text-field>
                <v-text-field label="Horario de atención:" filled rounded dense required></v-text-field>
                <v-textarea label="Otros aspectos a tener en cuenta:" no-resize filled rounded dense required></v-textarea>


                <!-- <v-alert v-if="msgError !== null" dense text type="error"
                  >{{ msgError }}
                </v-alert> -->
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="mt-2">
          <v-btn
            class="texto-capitalizado font-weight-bold px-16 btn-border-black"
            color="primary"
            >guardar</v-btn
          >
        </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout";
import BackBtn from "../../../components/UI/BackBtnComponent";

export default {
  name: "new-recogida",
  components: { BackBtn, PanelLayout },
};
</script>

<style scoped>
.v-application .primary {
  /*background-color: #1D6B41 !important;*/
  border-color: black !important;
}
</style>
