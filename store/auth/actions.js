import authService from "../../services/authService"

const actions = {

  async login({commit}, payload) {
    const {email, password} = payload
    try {
      const res = await authService.authLogin({email, password})

      if (res.data.status === 'Success') {
        commit('SET_AUTENTICADO', true)
        localStorage.setItem('token', res.data.token)

        await $nuxt.$router.push('/control-panel/panel')

        return true
      }
    } catch (e) {

      return e.response.data
    }
  },

  async logout({commit}) {
    const res = await authService.authLogout()

    if (res.data.status === 'Success') {
      commit('SET_AUTENTICADO', false)
      localStorage.clear()

      await $nuxt.$router.push('/login')
    }

  }
}

export default actions
