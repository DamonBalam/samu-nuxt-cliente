<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="texto-cairo-bold mb-2">Configuración</h1>

      <v-row dense>
        <v-col
          cols="12"
          md="6"
          class="px-2 mb-4"
        >
          <v-card
            flat
            elevation="2"
          >
            <v-toolbar
              flat
              dense
            >
              <v-toolbar-title class=" mx-auto">Logo de la Tienda</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="mb-0 pb-0">
              <v-img
                src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                aspect-ratio="2"
              ></v-img>
              <v-file-input
                label="Subir Imagen"
                dense
                filled
                prepend-icon="mdi-camera"
                class="mt-4"
              ></v-file-input>
            </v-card-text>
            <v-card-actions class="mt-0 pt-0">
              <v-btn
                block
                color="secondary"
              >
                Guardar
                <v-icon
                  small
                  left
                >mdi-content-save
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="px-2"
        >
          <v-card
            flat
            elevation="2"
          >
            <v-toolbar
              flat
              dense
              color="white"
              class="mb-0 pb-0"
            >
              <v-toolbar-title>Nombre de la Tienda</v-toolbar-title>

              <!--              <v-spacer></v-spacer>-->
              <!--              <v-btn icon>-->
              <!--                <v-icon color="black">-->
              <!--                  mdi-content-save-->
              <!--                </v-icon>-->
              <!--              </v-btn>-->
            </v-toolbar>

            <v-card-text class="mt-0 pt-0 mb-0 pb-0">
              <p class="texto-cairo-light">
                Este es el nombre que se ve en tu tienda.
              </p>

              <v-text-field
                autocomplete="off"
                v-model="nombre_tienda"
                filled
                rounded
                dense
              ></v-text-field>
            </v-card-text>


            <v-toolbar
              flat
              dense
              color="white"
              class="mt-0 pt-0 mb-0 pb-0"
            >
              <v-toolbar-title>Nombre de Usuario</v-toolbar-title>

              <!--              <v-spacer></v-spacer>-->
              <!--              <v-btn icon>-->
              <!--                <v-icon color="black">-->
              <!--                  mdi-content-save-->
              <!--                </v-icon>-->
              <!--              </v-btn>-->
            </v-toolbar>

            <v-card-text class="mt-0 pt-0">
              <p class="texto-cairo-light pb-0 mb-0">
                Este es el nombre con el que pueden buscar tu tienda (www.samu.app/TuTienda).
              </p>
              <p class="texto-cairo-light">
                Se recomienda usar tu mismo usuario de Instagram.
              </p>

              <v-text-field
                autocomplete="off"
                v-model="nombre_usuario"
                filled
                rounded
                dense
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn
                block
                color="secondary"
              >
                Guardar
                <v-icon
                  small
                  left
                >mdi-content-save
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout"

export default {
  name: "ConfiguracionScreen",
  components: {PanelLayout},
  data() {
    return {
      nombre_tienda: 'Samu Store',
      nombre_usuario: 'SoySamu',
    }
  },
}
</script>

<style scoped>

</style>
