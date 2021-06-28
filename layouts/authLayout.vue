<template>
  <v-app>
    <v-app-bar
      app
      class="primary"
      flat
    >
      <v-toolbar-title :class="margin">
        <img
          src="~/assets/brand/logo.png"
          class="logo mx-auto"
          alt="Logo Samu"
        />
      </v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <slot name="main"></slot>
    </v-main>

    <v-footer
      app
      color="primary"
    >
      <span>SAMU &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>

</template>

<script>
export default {
  name: "authLayout",
  computed: {
    margin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mx-auto'
        case 'sm':
          return 'mx-auto'
        case 'md':
          return 'margin-custom'
        case 'lg':
          return 'margin-custom'
        case 'xl':
          return 'margin-custom'
        default:
          return 'margin-custom'
      }
    }
  },
}
</script>

<style scoped>
.logo {
  width: 8rem;
  height: 4rem;
  margin-top: 10px;
}
.margin-custom {
  margin-left: 10rem;
}


</style>
