<template>
  <panel-layout>
    <template slot="main">
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mb-2 mt-md-5 ml-md-5">Nuevo método de Envío</h1>

      <v-row dense class="ml-md-5 mt-md-5">
        <v-col cols="12" md="6">
          <v-card width="100%" class="pa-2">
            <v-card-text>
              <v-form ref="new-envio">
                <label class="d-block font-weight-bold "
                  >Nombre del envío</label
                >
                <span style="font-size: 12px "
                  >Introduzca el nombre del método de envío que aparece para sus
                  clientes al tramitar el pedido.
                </span>
                <!-- label="Nombre del envío"
                  hint="Introduzca el nombre del método de envío que aparece para sus
                  clientes al tramitar el pedido." -->
                <v-text-field class="mt-1" filled rounded dense required ></v-text-field>
                <label class="d-block font-weight-bold "
                  >Tiempo de llegada del  envío</label
                >
                <span style="font-size: 12px "
                  >Introduzca el tiempo aproximada que tardará el pedido en llegar con este método.
                </span>
                <v-text-field filled rounded dense required></v-text-field>

                <label class="d-block font-weight-bold "
                  >Tarifa del envío</label
                >
                <span style="font-size: 12px "
                  >Introduzca el coste del envío como una cantidad fija.
                </span>
                <v-text-field  prepend-inner-icon="₡" filled rounded dense required></v-text-field>

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
  name: "new-envio",
  components: { BackBtn, PanelLayout },
};
</script>

<style scoped>
.v-application .primary {
  /*background-color: #1D6B41 !important;*/
  border-color: black !important;
}
</style>
