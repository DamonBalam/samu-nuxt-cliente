import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#06b0d7',
          accent: colors.grey.darken3,
          secondary: '#673ab7',
          info: colors.teal.lighten1,
          warning: '#ffc000',
          error: '#ff005d',
          success: colors.green.accent3
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
