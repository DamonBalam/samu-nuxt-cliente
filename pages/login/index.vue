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
          <v-container
            :class="marginMovil"
            class="animate__animated "
          >
            <v-row>
              <v-col
                cols="12"
                offset-md="7"
                md="5"
              >
                <h1 class="texto-cairo-bold title-custom mb-0 pb-0 white--text">
                  ¡Vende online con Dagga.app!
                </h1>
                <p class="parrafo-custom white--text">
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
                    <v-form
                      ref="login"
                      v-model="valid"
                      lazy-validation
                    >
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

                      <v-alert
                        v-if="msgError !== null"
                        dense
                        text
                        type="error"
                      >{{ msgError }}

                      </v-alert>
                    </v-form>
                    <nuxt-link
                      to="/recuperar-cuenta"
                      class="texto-cairo-semi-bold subtitle-1"
                    >¿Olvidaste tu contraseña?
                    </nuxt-link>
                  </v-card-text>
                  <v-card-actions class="my-0 py-0">
                    <v-row>
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-btn
                          :disabled="!valid"
                          color="black"
                          class="white--text"
                          tile
                          block
                          @click="login"
                        >ingresar
                        </v-btn>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
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
import {mapActions, mapMutations} from 'vuex'
import AuthLayout from "../../layouts/authLayout"

export default {
  name: "login",
  components: {AuthLayout},
  data() {
    return {
      valid: false,
      msgError:null,
      formulario: {
        email: null,
        password: null
      },
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ],
      passRules: [
        v => !!v || 'Password es requerido',
      ]
    }
  },
  beforeMount() {
    const token = localStorage.getItem('token')

    if (token !== null) {
      this.setAuth(true)
      this.$router.push('/control-panel/panel')
    }
  },
  computed: {
    imgMovil() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1641593498/samu/Slide_1920_Full_szmijk.jpg'
        case 'sm':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1641593498/samu/Slide_1920_Full_szmijk.jpg'
        case 'md':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1641593498/samu/Slide_1920_Full_szmijk.jpg'
        case 'lg':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1641593498/samu/Slide_1920_Full_szmijk.jpg'
        case 'xl':
          return 'https://res.cloudinary.com/balamcode/image/upload/v1641593498/samu/Slide_1920_Full_szmijk.jpg'
      }
    },
    marginMovil() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'margin-mobile animate__fadeInUp'
        case 'sm':
          return 'margin-mobile animate__fadeInUp'
        case 'md':
          return 'no-margin animate__fadeInRight'
        case 'lg':
          return 'no-margin animate__fadeInRight'
        case 'xl':
          return 'no-margin animate__fadeInRight'
        default:
          return 'no-margin animate__fadeInRight'
      }
    }
  },
  methods: {
    ...mapMutations({setAuth: 'auth/SET_AUTENTICADO'}),
    ...mapActions({authLogin: 'auth/login'}),
    async login() {
      if ( this.$refs.login.validate() ) {
        const data = await this.authLogin(this.formulario)
        if ( data.status === 'Error' ){
          this.msgError = data.message
        }
      } else {
        setTimeout(()=> {
          this.$refs.login.reset()
        },3000)
      }
    }
  },
}
</script>

<style scoped>
.title-custom, .parrafo-custom {
  text-transform: uppercase;
}

.title-custom {
  font-size: 2.6rem;
}

.parrafo-custom {
  font-size: 1.2rem;
}

.hero-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /*background-position: top center;*/
  /*background-image: url("~/assets/brand/Bg_1_Movil.jpg");*/
}

.margin-mobile {
  margin-bottom: 40rem;
}

.no-margin {
  margin: 5rem auto 0 auto;
}
</style>
