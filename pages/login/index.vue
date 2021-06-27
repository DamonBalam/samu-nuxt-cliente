<template>
  <auth-layout>
    <template v-slot:main>
      <v-card
        width="100%"
        height="100%"
        tile
      >
        <v-img
          :src="imgMovil"
          alt="hero"
          class="hero-img"
        >
          <v-container>
            <v-row>
              <v-col
                cols="12"
                offset-md="7"
                md="5"
              >
                <h1 class="texto-cairo-bold title-custom mb-0 pb-0">
                  ¡Vende online con Samu.app!
                </h1>
                <p class="parrafo-custom">
                  Juntos en camino al éxito. Impulsa tu negocio al máximo con
                  nosotros.
                </p>
                <v-card
                  tile
                  flat
                  class="pa-4"
                >
                  <v-card-title>
                    <h4>ACCEDER A SU CUENTA</h4>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="login" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="formulario.email"
                        :rules="emailRules"
                        label="E-mail"
                        filled
                        rounded
                        dense
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="formulario.password"
                        :rules="passRules"
                        filled
                        rounded
                        dense
                        label="Password"
                        required
                      ></v-text-field>
                    </v-form>
                    <nuxt-link
                      to="/recuperar-cuenta"
                      class="texto-cairo-semi-bold subtitle-1"
                    >¿Olvidaste tu contraseña?
                    </nuxt-link>
                  </v-card-text>
                  <v-card-actions>
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-btn
                          :disabled="!valid"
                          color="black"
                          class="white--text"
                          block
                          @click="login"
                        >ingresar
                        </v-btn>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-btn
                          to="/registro"
                          text
                          color="primary"
                          block
                        >Crear nueva cuenta
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-card>
    </template>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../layouts/authLayout"

export default {
  name: "login",
  components: {AuthLayout},
  data() {
    return {
      valid:false,
      formulario: {
        email: null,
        password: null
      },
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ],
      passRules:[
        v => !!v || 'Password es requerido',
      ]
    }
  },
  computed: {
    imgMovil() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1624821134/samu/Bg_1_Movil_jlktd0.jpg'
        case 'sm':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1624821134/samu/Bg_1_Movil_jlktd0.jpg'
        case 'md':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1624821138/samu/Bg_1_cbdnid.jpg'
        case 'lg':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1624821138/samu/Bg_1_cbdnid.jpg'
        case 'xl':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1624821138/samu/Bg_1_cbdnid.jpg'
      }
    }
  },
  methods: {
    login() {
      this.$refs.login.validate()
    }
  },
}
</script>

<style scoped>
.title-custom, .parrafo-custom {
  text-transform: uppercase;
}

.title-custom {
  font-size: 3rem;
}

.parrafo-custom {
  font-size: 1.2rem;
}

.hero-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
//background-position: top center; //background-image: url("~/assets/brand/Bg_1_Movil.jpg");
}
</style>
