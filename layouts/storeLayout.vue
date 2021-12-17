<template>
  <v-app width="100%">
    <v-app-bar app color="white" elevation="1" class="px-5" dense fixed>
      <v-toolbar-title>
        <nuxt-link to="/">
          <img
            src="~/assets/brand/logo_blue.png"
            class="logo mt-2"
            alt="Logo Samu"

          />
        </nuxt-link>

      </v-toolbar-title>
      <v-spacer/>

      <v-toolbar-items>
        <v-btn text class="text-capitalize" to="/login">
          Entrar
          <v-icon right color="black">mdi-account-outline</v-icon>
        </v-btn>


        <v-btn icon color="primary">
          <v-badge
            :content="1"
            :value="1"
            color="bg-morado"
            overlap
          >
            <v-icon>
              mdi-cart-outline
            </v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main class="white">
      <v-container class="pa-0" fluid>
        <slot name="main"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logout from "../components/UI/LogoutComponent";

export default {
  name: "panelLayout",
  components: {Logout},
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-home",
          title: "Inicio",
          to: "/control-panel/panel",
        },
        {
          icon: "mdi-cart",
          title: "Productos",
          to: "/control-panel/productos",
        },
        {
          icon: "mdi-text-box-check",
          title: "Ordenes",
          to: "/control-panel/ordenes",
        },
        {
          icon: "mdi-credit-card",
          title: "Pagos",
          to: "/control-panel/pagos",
        },
        {
          icon: "mdi-van-utility",
          title: "Envios y recogida",
          to: "/control-panel/envios-recogida",
        },
        {
          icon: "mdi-cog",
          title: "Configuración",
          to: "/control-panel/configuracion",
        },
      ],
    };
  },
  computed: {
    margin() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "margin-mobile";
        case "sm":
          return "margin-mobile";
        case "md":
          return "margin-custom";
        case "lg":
          return "margin-custom";
        case "xl":
          return "margin-custom";
        default:
          return "margin-custom";
      }
    },
  },
};
</script>

<style scoped>
.logo {
  width: 6rem;
}

.margin-mobile {
  display: flex;
  justify-content: space-between;
}

.margin-custom {
  margin-left: 5rem;
}
</style>
