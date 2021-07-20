<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2">Configuración</h1>

      <v-row dense>
        <v-col cols="12" md="5">
          <v-card height="350">
            <v-toolbar flat dense>
              <v-toolbar-title class="mx-auto"
                >Logo de la Tienda</v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <div class="d-flex flex-column justify-center align-center">
                <v-img
                  src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                  width="400"
                  aspect-ratio="2"
                  max-height="300"
                ></v-img>
              </div>

              <v-file-input
                label="Subir Imagen"
                dense
                filled
                prepend-icon="mdi-camera"
                class="mt-4"
              ></v-file-input>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-card height="350">
            <v-toolbar flat dense color="white" class="mb-0 pb-0">
              <v-toolbar-title>Nombre de la Tienda</v-toolbar-title>
            </v-toolbar>

            <v-card-text class="mt-0 pt-0">
              <p>Este es el nombre que se ve en tu tienda.</p>

              <v-text-field
                autocomplete="off"
                v-model="nombre_tienda"
                filled
                rounded
                dense
              ></v-text-field>
            </v-card-text>

            <v-toolbar flat dense color="white">
              <v-toolbar-title>Nombre de Usuario</v-toolbar-title>
            </v-toolbar>

            <v-card-text class="mt-0 pt-0">
              <p class="pb-0 mb-0">
                Este es el nombre con el que pueden buscar tu tienda
                (www.samu.app/TuTienda).
              </p>
              <p class="">Se recomienda usar tu mismo usuario de Instagram.</p>

              <v-text-field
                autocomplete="off"
                v-model="nombre_usuario"
                filled
                rounded
                dense
              ></v-text-field>
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
  name: "ConfiguracionScreen",
  components: { PanelLayout },
  data() {
    return {
      nombre_tienda: "Samu Store",
      nombre_usuario: "SoySamu",
    };
  },
};
</script>

<style scoped>
</style>
