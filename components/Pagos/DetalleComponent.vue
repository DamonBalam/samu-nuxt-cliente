<template>
  <v-container
    class="fondo"
  >

    <div class="d-flex flex-column flex-md-row align-center align-md-start mt-15">
      <div>
        <v-avatar size="100" tile>
          <img src="~assets/img/Foto_Producto.jpg" alt="imagen del producto"/>
        </v-avatar>
      </div>
      <div class="d-flex flex-column flex-md-row justify-md-space-between mt-2 mt-md-0"  style="width: 100%">

        <div class="d-flex flex-column align-center align-md-start  justify-md-start ml-md-5">
          <p class="my-0 font-weight-bold">Nombre del producto</p>
          <p class="my-0">Cantidad</p>
        </div>

        <div class="d-flex align-center align-md-start">
          <p class="d-block my-0 font-weight-light mx-auto mr-md-10">Precio</p>
        </div>

      </div>
    </div>

    <hr class="separador my-10">

    <div class="d-flex justify-space-between">
      <span class="ml-5 ml-md-10">Subtotal</span>
      <span class="mr-5 mr-md-10">{{ subtotal }}</span>
    </div>
    <div class="d-flex justify-space-between mt-2">
      <span class="ml-5 ml-md-10">Envío</span>
      <span class="mr-5 mr-md-10">{{ envio }}</span>
    </div>

    <hr class="separador my-10">


    <div class="d-flex  justify-space-between mt-2">
      <span class="ml-5 ml-md-10 font-weight-bold headline">Total</span>
      <span class="mr-5 mr-md-10 headline">{{ total }}</span>
    </div>
  </v-container>
</template>

<script>
export default {
  props:{
    subtotal:{
      type: String,
      default: 'Precio'
    },
    envio:{
      type: String,
      default: 'Precio'
    },
    total:{
      type: String,
      default: 'Precio'
    },
  },
  name: "DetalleComponent",
}
</script>

<style scoped>
.fondo {
  background-color: rgb(243, 243, 243);
  height: calc(100vh - 50px);
}
.separador {
  color: #e0e0e0;
}

</style>
