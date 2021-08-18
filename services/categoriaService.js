import api from "./api";

export default  {
  index() {
    return api.get('/categorias')
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
