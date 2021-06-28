import api from './api'

export default {

  authLogin(payload) {
    return api.post('/login', payload)
  },
  authLogout() {
    const token = localStorage.getItem('token')
    return api.post('/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
