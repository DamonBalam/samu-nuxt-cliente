<template>
<auth-layout>
  <template v-slot:main>
    <h1>login</h1>
  </template>
</auth-layout>
</template>

<script>
import AuthLayout from "../../layouts/authLayout"
export default {
  name: "login",
  components: {AuthLayout}
}
</script>

<style scoped>

</style>
