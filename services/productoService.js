import api from './api'

const token = localStorage.getItem('token')

api.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default {
  index() {
    return api.get('/productos')
  },
  store(payload) {
    return api.post('/producto', payload)
  },
  show(payload) {
    return api.get(`/producto/${payload}`)
  },
  delete(payload) {
    return api.delete(`/producto/${payload}`)
  }
}
