<template>
  <panel-layout>
    <template v-slot:main>
      <h1>Pago</h1>
      <v-row>
        <v-col
          cols="12"
          md="4"
          class="mb-0 pb-0"
        >
          <p class="texto-cairo-light mb-0 pb-0">Crea, cambia o edita los métodos de pago de tu tienda.</p>
        </v-col>

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
                Métodos de pago
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mt-0 pt-0">
              <p class="texto-cairo-light">
                Configure o edite los diferentes métodos de pago.
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
                    to="pagos/new-sinpe-movil"
                  >
                    <v-icon
                      left
                      small
                    >mdi-plus
                    </v-icon>
                    Añadir Sinpe Móvil
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-btn
                    color="primary"
                    elevation="0"
                    block
                    small
                    to="pagos/new-transferencia-bank"
                  >
                    <v-icon
                      left
                      small
                    >mdi-plus
                    </v-icon>
                    Añadir Transferencias
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
                    <div class="mr-auto d-flex mb-2">
                      <div class="mr-4">
                        <v-avatar
                          size="100"
                        >
                          <v-icon
                            size="80"
                            color="primary"
                          >
                            mdi-cellphone
                          </v-icon>
                        </v-avatar>
                      </div>
                      <div class=" my-0">
                        <p class="my-0">Sinpe Móvil</p>
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
                    <div class="mr-auto d-flex mb-2">
                      <div class="mr-4">
                        <v-avatar
                          size="100"
                        >
                          <v-icon
                            size="80"
                            color="primary"
                          >
                            mdi-bank
                          </v-icon>
                        </v-avatar>
                      </div>
                      <div class=" my-0">
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
  name: "PagosScreen",
  components: {PanelLayout},
  data() {
    return {
      items: [
        {title: 'Editar'},
        {title: 'Borrar'},
      ]
    }
  },
}
</script>

<style scoped>

</style>
