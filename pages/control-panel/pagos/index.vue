<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2 mt-md-5 ml-md-5">Pago</h1>
      <v-row dense class="ml-md-5 mt-md-5">
        <v-col cols="12" md="3" >
          <p >
            Crea, cambia o edita los métodos de pago de tu tienda.
          </p>
        </v-col>

        <v-col cols="12" md="7">
          <v-card width="100%" class="px-2 py-2">
            <v-toolbar flat dense>
              <v-toolbar-title> Métodos de pago </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-0 pt-0">
              <p>Configure o edite los diferentes métodos de pago.</p>

              <v-row dense>
                <v-col cols="12" class="mb-2">
                  <v-btn
                    color="primary"
                    small
                    to="pagos/new-sinpe-movil"
                    class="texto-capitalizado font-weight-bold btn-border-black px-12"
                  >
                    <v-icon left small>mdi-plus </v-icon>
                    Añadir Sinpe Móvil
                  </v-btn>
                </v-col>
                <v-col cols="12" class="mb-2">
                  <v-btn
                    color="primary"
                    small
                    to="pagos/new-transferencia-bank"
                    class="texto-capitalizado font-weight-bold btn-border-black px-10"
                  >
                    <v-icon left small>mdi-plus </v-icon>
                    Añadir Transferencias
                  </v-btn>
                </v-col>

                <v-col cols="12" md="12">
                  <v-card
                    width="100%"
                    outlined
                    flat
                    class="d-flex pa-2"
                  >
                    <div class="mr-auto d-flex mb-2">
                      <div class="mr-4">
                        <v-avatar size="100">
                          <v-icon size="80" color="primary">
                            mdi-cellphone
                          </v-icon>
                        </v-avatar>
                      </div>
                      <div class="my-0">
                        <p class="my-0">Sinpe Móvil</p>
                        <p class="my-0 mb-1">Jonathan Martinez</p>
                        <p class="my-0 mb-1">88888</p>
                      </div>
                    </div>

                    <div class="d-flex align-center">
                      <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn v-bind="attrs" v-on="on" small outlined  elevation="1" class="texto-capitalizado">
                            acciones
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
                <v-col cols="12" md="12">
                  <v-card
                    width="100%"
                    outlined
                    flat
                    class="d-flex pa-2"
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
                          <v-btn v-bind="attrs" v-on="on" small outlined  elevation="1" class="texto-capitalizado">
                            acciones
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
  name: "PagosScreen",
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
