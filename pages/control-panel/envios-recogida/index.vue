<template>
  <panel-layout>
    <template v-slot:main>
      <h1>Envios y Recogida</h1>
      <v-row>
        <v-col
          cols="12"
          md="4"
          class="mb-0 pb-0"
        >
          <p class="texto-cairo-bold">Añade un nuevo método de envío.</p>
          <p class="texto-cairo-light mb-0 pb-0">Seleccione cómo hará llegar los productos a sus clientes. Agregue la
            opción de Envío y/o Recogida en la tienda según su disponibilidad.</p>
        </v-col>


        <!--    ENVIO    -->
        <v-col
          cols="12"
          md="8"
        >
          <v-card
            width="100%"
            flat
            elevation="0"
          >
            <v-toolbar
              flat
              dense
            >
              <v-toolbar-title>
                Envio
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-0 pt-0">
              <p class="texto-cairo-light">
                Habilite las diferentes tarifas de envío personalizadas según lo necesite.
              </p>

              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-btn
                    color="primary"
                    elevation="0"
                    small
                    block
                    to="envios-recogida/new-envio"
                  >
                    <v-icon
                      left
                      small
                    >mdi-plus
                    </v-icon>
                    Añadir Envio
                  </v-btn>
                </v-col>

                <v-col
                  cols="6"
                  md="12"
                >
                  <v-card
                    width="100%"
                    outlined
                    flat
                    class="d-flex flex-column  flex-md-row pa-2"
                  >
                    <div class="mr-auto d-flex">
                      <div class="mr-4">
                        <v-avatar
                          size="80"
                        >
                          <v-icon
                            size="60"
                            color="primary"
                          >
                            mdi-van-utility
                          </v-icon>
                        </v-avatar>
                      </div>
                      <div class=" my-0">
                        <p class="my-0">Nombre:
                          Envio dentro de la GAM
                        </p>
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
            </v-card-text>
          </v-card>
        </v-col>

        <!--    RECOGIDA    -->
        <v-col
          cols="12"
          md="8"
          offset-md="4"
        >
          <v-card
            width="100%"
            flat
            elevation="0"
          >
            <v-toolbar
              flat
              dense
            >
              <v-toolbar-title>
                Recogida
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-0 pt-0">
              <p class="texto-cairo-light">
                Habilite la opción de recoger en su tienda física si la tienen disponible.
              </p>

              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-btn
                    color="primary"
                    elevation="0"
                    small
                    block
                    to="envios-recogida/new-recogida"
                  >
                    <v-icon
                      left
                      small
                    >mdi-plus
                    </v-icon>
                    Añadir Recogida
                  </v-btn>
                </v-col>

                <v-col
                  cols="6"
                  md="12"
                >
                  <v-card
                    width="100%"
                    outlined
                    flat
                    class="d-flex flex-column  flex-md-row pa-2"
                  >
                    <div class="mr-auto d-flex">
                      <div class="mr-4">
                        <v-avatar
                          size="80"
                        >
                          <v-icon
                            size="60"
                            color="primary"
                          >
                            mdi-store
                          </v-icon>
                        </v-avatar>
                      </div>
                      <div class=" my-0">
                        <p class="my-0">Lugar:
                          Texto de prueba
                        </p>
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
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout"

export default {
  name: "ProductosScreen",
  components: {PanelLayout}
}
</script>

<style scoped>

</style>
