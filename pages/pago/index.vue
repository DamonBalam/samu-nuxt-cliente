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

              <v-col cols="8" offset="2" class="mt-10 mb-10">
                <label class="d-block black--text headline mb-2">Información</label>
                <v-card outlined class="pa-2">
                  <div class="d-flex justify-space-between align-center">
                    <span class="d-block ">Contacto</span>
                    <v-btn text small>
                      Editar
                      <v-icon small right>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </div>

                  <hr class="my-2 separador">

                  <div class="d-flex justify-space-between align-center">
                    <span class="d-block">Dirección</span>
                    <v-btn text small>
                      Editar
                      <v-icon small right>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </div>

                  <hr class="my-2 separador">


                  <div class="d-flex justify-space-between align-center">
                    <span class="d-block">Teléfono</span>
                    <v-btn text small>
                      Editar
                      <v-icon small right>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </div>

                  <hr class="my-2 separador">


                  <div class="d-flex justify-space-between align-center">
                    <span class="d-block">Envío</span>
                    <v-btn text small>
                      Editar
                      <v-icon small right>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="8" offset="2">
                <v-radio-group v-model="tipoDeEntrega" dense>
                  <template v-slot:label>
                    <span class="d-block mb-2 black--text headline">Pago</span>
                    <span>Selecciona tu forma de pago.</span>
                  </template>
                  <v-card outlined class="pa-2">
                    <v-radio :value="0" >
                      <template v-slot:label>
                        <span class="d-block ml-2">Transferencia bancaria</span>
                      </template>
                    </v-radio>
                    <v-container v-if="tipoDeEntrega=== 0" class="fondo d-flex flex-column pa-5">
                      <span class="d-block">Nombre del Banco</span>
                      <span class="d-block">Titular de la Cuenta</span>
                      <span class="d-block">Cuenta</span>
                    </v-container>
                    <hr class="separador my-2">
                    <v-radio :value="1">
                      <template v-slot:label>
                          <span class="d-block ml-2">Sinpe Móvil</span>
                      </template>
                    </v-radio>
                    <v-container v-if="tipoDeEntrega=== 1" class="fondo pa-5">
                      <span>Nombre de la persona</span> -
                      <span>Teléfono</span>
                    </v-container>
                  </v-card>

                </v-radio-group>
              </v-col>



              <v-col cols8 offset="2">
                <v-btn class="texto-capitalizado font-weight-bold px-16 btn-border-black" color="primary">Finalizar Pedido
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>

        <!-- Detalle -->
        <v-col cols="4">
          <DetalleComponent/>
        </v-col>
      </v-row>
    </template>
  </StoreLayout>
</template>

<script>
import StoreLayout from "@/layouts/storeLayout.vue"
import DetalleComponent from "@/components/Pagos/DetalleComponent";

export default {
  name: "Envio",
  components: {DetalleComponent, StoreLayout},
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
          href: '/informacion',
        },
        {
          text: 'Envío',
          disabled: true,
          href: '/envio',
        },
        {
          text: 'Pago',
          disabled: false,
          href: 'pago',
        },
      ]
    }
  },
}
</script>

<style scoped>
.separador {
  color: #e0e0e0;
}
span {
  color: #858080;
}
.fondo {
  background-color: rgb(243, 243, 243);

}
</style>
