<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dense
      flat
    >
      <v-toolbar-title>
        <img
          src="~/assets/brand/logo.png"
          class="logo mx-auto"
          alt="Logo Samu"
        />
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <slot name="main"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logout from "../components/UI/LogoutComponent"
export default {
  name: "panelLayout",
  components: {Logout},
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/control-panel/panel'
        },
        {
          icon: 'mdi-cart',
          title: 'Productos',
          to: '/control-panel/productos'
        },
        {
          icon: 'mdi-text-box-check',
          title: 'Ordenes',
          to: '/control-panel/ordenes'
        },
        {
          icon: 'mdi-credit-card',
          title: 'Pagos',
          to: '/control-panel/pagos'
        },
        {
          icon: 'mdi-van-utility',
          title: 'Envios y recogida',
          to: '/control-panel/envios-recogida'
        },
        {
          icon: 'mdi-cog',
          title: 'Configuración',
          to: '/control-panel/configuracion'
        }
      ],
    }
  },
  computed: {
    margin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'margin-mobile'
        case 'sm':
          return 'margin-mobile'
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

.margin-mobile {
  display: flex;
  justify-items: space-between;
}

.margin-custom {
//margin-left: 5rem;
}

</style>
