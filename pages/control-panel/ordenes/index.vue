<template>
  <panel-layout>
    <template v-slot:main>
      <h1 class="mb-2 mt-md-5 ml-md-5">Órdenes</h1>
      <v-row dense class="mx-md-5">
          <v-col cols="12" md="12">
            <v-text-field prepend-inner-icon="mdi-magnify" rounded dense filled label="Buscar producto por nombre"></v-text-field>
          </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout"
export default {
  name: "OrdenesScreen",
  components: {PanelLayout}
}
</script>

<style scoped>

</style>
