<template>
  <StoreLayout>
    <template v-slot:main>
      <v-row no-gutters>
        <!--  Informacion   -->
        <v-col cols="8">
          <v-form ref="formulario">
            <v-row no-gutters>
              <v-col cols="8" offset="2">
                <v-breadcrumbs :items="items" large class="mt-10 pa-0">
                  <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                  </template>

                  <template v-slot:item="{ item }">
                    <v-breadcrumbs-item
                      :href="item.href"
                      :disabled="item.disabled"
                      :style=" !item.disabled ? 'font-weight: bold': ''"
                      active-class="black--text"
                      exact-active-class="black--text"
                    >
                      {{ item.text }}
                    </v-breadcrumbs-item>
                  </template>
                </v-breadcrumbs>
              </v-col>

              <v-col cols="8" offset="2" class="mt-10">
                <label class="d-block black--text mb-2">Información de contacto</label>
                <v-text-field placeholder="E-mail" outlined dense></v-text-field>
              </v-col>

              <v-col cols="8" offset="2">
                <v-radio-group v-model="tipoDeEntrega">
                  <template v-slot:label>
                    <span class="d-block mb-2 black--text">Forma de entrega</span>
                  </template>
                  <v-radio :value="0">
                    <template v-slot:label>
                      <div class="black--text d-flex align-center">
                        <v-icon color="black">mdi-van-utility</v-icon>
                        <span class="d-block ml-2">Envío</span>
                      </div>
                    </template>
                  </v-radio>
                  <v-radio :value="1">
                    <template v-slot:label>
                      <div class="black--text d-flex align-center">
                        <v-icon color="black">mdi-store-outline</v-icon>
                        <span class="d-block ml-2">Recoger en la tienda</span>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>

              <v-col v-if="tipoDeEntrega === 0" cols="8" offset="2" class="mt-5">
                <label class="d-block mb-5 black--text">Dirección de envío</label>

                <v-row no-gutters>
                  <v-col cols="6" class="pr-1">
                    <v-text-field placeholder="Nombre" outlined dense></v-text-field>
                  </v-col>
                  <v-col cols="6" class="pl-1">
                    <v-text-field placeholder="Apellido" outlined dense></v-text-field>
                  </v-col>

                  <v-col cols="4" class="pr-1">
                    <v-text-field placeholder="Provincia" outlined dense></v-text-field>
                  </v-col>

                  <v-col cols="4" class="px-1">
                    <v-text-field placeholder="Cantón" outlined dense></v-text-field>
                  </v-col>

                  <v-col cols="4" class="pl-1">
                    <v-text-field placeholder="Distrito" outlined dense></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field placeholder="Dirección exacta" outlined dense></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field placeholder="Número de teléfono" outlined dense></v-text-field>
                  </v-col>

                </v-row>
              </v-col>

              <v-col v-else cols="8" offset="2"  class="mt-5">
                <label class="d-block mb-5 black--text">Ubicación de la tienda</label>
                <v-textarea dense outlined readonly no-resize v-model="tiendaUbicacion"></v-textarea>
              </v-col>

              <v-col  cols="8" offset="2"  class="mt-5">
                <v-checkbox v-model="registrarme">
                  <template v-slot:label>
                    <div class="black--text">
                      Registrarme para guardar mi información y consultar más rápidamente la próxima vez.
                    </div>
                  </template>
                </v-checkbox>
              </v-col>

              <v-col cols8 offset="2">
                <v-btn class="texto-capitalizado font-weight-bold px-16 btn-border-black" color="primary">Continuar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>

        <!-- Detalle -->
        <v-col cols="4">
          <v-card
            color="#C4C4C4"
            width="100%"
            height="100vh"
            outlined tile
          >
            <v-card-title class="white--text">
              Detalle
            </v-card-title>

          </v-card>
        </v-col>
      </v-row>
    </template>
  </StoreLayout>
</template>

<script>
import StoreLayout from "@/layouts/storeLayout.vue"

export default {
  name: "Pago",
  components: {StoreLayout},
  data() {
    return {
      // 0 -> Envio(Default), 1 -> Recoger
      tipoDeEntrega: 0,
      registrarme: false,
      tiendaUbicacion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      items: [
        {
          text: 'Información',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Envío',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Pago',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
