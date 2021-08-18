<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2 mt-md-5 ml-md-5">Envios y Recogida</h1>
      <v-row dense class="ml-md-5 mt-md-5">
        <v-col cols="12" md="3">
          <p>Añade un nuevo método de envío.</p>
          <p>
            Seleccione cómo hará llegar los productos a sus clientes. Agregue la
            opción de Envío y/o Recogida en la tienda según su disponibilidad.
          </p>
        </v-col>

        <!--    ENVIO    -->
        <v-col cols="12" md="7">
          <v-card width="100%" class="py-2">
            <v-toolbar flat dense>
              <v-toolbar-title> Envio </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-0 pt-0">
              <p class="texto-cairo-light">
                Habilite las diferentes tarifas de envío personalizadas según lo
                necesite.
              </p>

              <v-row>
                <v-col cols="12" md="6">
                  <v-btn
                    color="primary"
                    elevation="1"
                    small
                    class="btn-border-black texto-capitalizado"
                    to="envios-recogida/new-envio"
                  >
                    <v-icon left small>mdi-plus </v-icon>
                    Añadir Envio
                  </v-btn>
                </v-col>

                <v-col cols="12" md="12">
                  <v-card width="100%" outlined flat class="d-flex pa-2">
                    <div class="mr-auto d-flex">
                      <div class="mr-4">
                        <v-avatar size="80">
                          <v-icon size="60" color="primary">
                            mdi-van-utility
                          </v-icon>
                        </v-avatar>
                      </div>
                      <div class="my-0">
                        <p class="my-0">Nombre: Envio dentro de la GAM</p>
                        <p class="my-0 mb-1">Tarifa: ₡3.000</p>
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
                            class="texto-capitalizado"
                          >
                            Acciones
                            <v-icon right dark> mdi-chevron-down </v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            link
                          >
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <!--    RECOGIDA    -->
        <v-col cols="12" md="7" offset-md="3">
          <v-card width="100%" class="pa-2">
            <v-toolbar flat dense>
              <v-toolbar-title> Recogida </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-0 pt-0">
              <p class="texto-cairo-light">
                Habilite la opción de recoger en su tienda física si la tienen
                disponible.
              </p>

              <v-row>
                <v-col cols="12" md="6">
                  <v-btn
                    color="primary"
                    elevation="1"
                    small
                    class="btn-border-black texto-capitalizado"
                    to="envios-recogida/new-recogida"
                  >
                    <v-icon left small>mdi-plus </v-icon>
                    Añadir Recogida
                  </v-btn>
                </v-col>

                <v-col cols="12" md="12">
                  <v-card width="100%" outlined flat class="d-flex pa-2">
                    <div class="mr-auto d-flex">
                      <div class="mr-4">
                        <v-avatar size="80">
                          <v-icon size="60" color="primary"> mdi-store </v-icon>
                        </v-avatar>
                      </div>
                      <div class="my-0">
                        <p class="my-0">Lugar: Texto de prueba</p>
                        <p class="my-0 mb-1">Horario: 8:00 am - 4:00 pm</p>
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
                            class="texto-capitalizado"
                            elevation="1"
                          >
                            Acciones
                            <v-icon right dark> mdi-chevron-down </v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            link
                          >
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
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
  name: "ProductosScreen",
  components: { PanelLayout },
  data() {
    return {
      items: [{ title: "Editar" }, { title: "Borrar" }],
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
