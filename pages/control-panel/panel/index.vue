<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2 mt-md-5 ml-md-5">¡Bienvenido!</h1>
      <v-row dense class="ml-md-5 mt-md-5">
        <v-col cols="10">
          <v-card width="100%" class="pa-2">
            <v-card-title class="text-center" style="font-size: 30px">
              Sigue los siguientes pasos para empezar a vender :
            </v-card-title>
            <v-card-text>
              <v-container class="d-flex align-center mb-5">
                <v-btn color="primary" fab depressed small >
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <div class="ml-3">
                  <p class="font-weight-bold mb-0 pb-0 subtitle-1 black--text">
                    Publica tu primer producto.
                  </p>
                  <span
                    >Añade la imagenes, precios y detalles de tus
                    productos.</span
                  >
                </div>
              </v-container>

              <v-container class="d-flex align-center mb-5">
                <v-btn color="gray"  outlined fab depressed small link to="/control-panel/pagos">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <div class="ml-3">
                  <p class="font-weight-bold mb-0 pb-0 subtitle-1 black--text">
                    Añade un método de pago para tus clientes.
                  </p>
                  <span
                    >Añade tu sinpe móvil y/o tu cuenta para transferencias
                    bancarias.</span
                  >
                </div>
              </v-container>

              <v-container class="d-flex align-center mb-5">
                <v-btn color="gray" fab depressed small outlined to="/control-panel/envios-recogida" link>
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <div class="ml-3">
                  <p class="font-weight-bold mb-0 pb-0 subtitle-1 black--text">
                    Agrega una opción de Envío/Recogida para tus clientes.
                  </p>
                  <span
                    >Agrega la dirección de tu tienda para recogida de productos
                    y/o detalles para el envío.</span
                  >
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout";
export default {
  name: "PanelScreen",
  // middleware: "auth",
  components: { PanelLayout },
};
</script>

<style scoped>
</style>
