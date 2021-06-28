<template>
<panel-layout>
  <template v-slot:main>
    <h1 class="red">panel</h1>
  </template>
</panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout"
export default {
  name: "PanelScreen",
  // middleware: "auth",
  components: {PanelLayout}
}
</script>

<style scoped>

</style>
