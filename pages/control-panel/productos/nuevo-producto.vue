<template>
  <panel-layout>
    <template slot="main">
      <back-btn color="secondary" text="Atrás" />
      <h1 class="mt-md-5 ml-md-5">Nuevo Producto</h1>
      <v-breadcrumbs :items="items" class="py-1" large>
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :disabled="item.disabled" class="blue--text">
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-row v-if="step === 1" dense class="ml-md-5 mt-md-3">
        <v-col cols="12" md="10">
          <v-card class="pa-2" height="400px">
            <v-card-title class="mt-1 pt-0">
              Seleccionar categoría del producto
            </v-card-title>
          </v-card>

          <v-row dense class="mt-2">
            <v-col cols="12" class="d-flex justify-md-end">
              <v-btn
                color="primary"
                class="
                  font-weight-bold
                  btn-border-black
                  texto-capitalizado
                  px-16
                "
                small
                @click="changeStep(1)"
              >
                Guardar y continuar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="step === 2" dense class="ml-md-5 mt-md-3">
        <v-col cols="12" md="10">
          <v-row >
            <v-col cols="8">
              <v-card class="pa-2" height="550px">
                <v-card-text>
                  <v-form>
                    <label for="nombre" class="font-weight-bold subtitle black--text ">Título del producto</label>
                    <v-text-field outlined filled dense class="mt-2"></v-text-field>

                    <label for="descripcion" class="font-weight-bold subtitle black--text ">Descripción del producto</label>
                    <v-textarea outlined no-resize filled dense class="mt-2" />

                    <label for="imagenes" class="font-weight-bold subtitle black--text d-block ">Imágenes del producto</label>
                    <label for="imagenes" class="subtitle black--text">La primera imagen será la foto principal del producto (arrastra para acomodar).</label>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4" >
              <v-card class="pa-2 mb-2" height="230px">
                <v-card-text>
                  <v-form>
                    <label for="nombre" class="font-weight-bold subtitle black--text mb-2">Precio</label>
                    <v-text-field outlined filled dense prepend-inner-icon="₡" class="mt-2"></v-text-field>
                    <span class="texto-color-cyan font-weight-bold d-block">Establecer un precio de oferta</span>
                    <span class="black--text">Muestre descuentos en sus precios habituales. Por ejemplo :</span>
                    <span class="d-block"><span class="text-decoration-line-through">₡10.000 </span> ₡9.500</span>
                  </v-form>
                </v-card-text>
              </v-card>
              <v-card class="pa-2 mb-2" height="180px">
                <v-card-text>
                  <v-form>
                    <label for="nombre" class="font-weight-bold subtitle black--text mb-2 d-block">Cantidad en inventario</label>
                    <span class="black--text">Si deja el espacio en blanco no abrá limite de inventario</span>
                    <v-text-field outlined filled dense class="mt-2"></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
              <v-card class="pa-2" height="120px">
              <v-card-text>
                  <v-form>
                    <label for="nombre" class="font-weight-bold subtitle black--text">Disponibilidad del Producto</label>
                    <v-switch dense></v-switch>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row dense class="mt-2">
            <v-col cols="12" class="d-flex justify-md-end">
              <v-btn
                outlined
                class="
                  font-weight-bold
                  btn-border-black
                  texto-capitalizado
                  px-10
                  mr-2
                "
                small
                @click="returnStep(2)"
              >
                Paso anterior
              </v-btn>
              <v-btn
                color="primary"
                class="
                  font-weight-bold
                  btn-border-black
                  texto-capitalizado
                  px-16
                "
                small
                @click="changeStep(2)"
              >
                Guardar y continuar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="step === 3" dense class="ml-md-5 mt-md-3">
        <v-col cols="12" md="10">
          <v-card class="pa-2" height="400px">
            <v-card-text>
                  <v-form>
                    <label for="nombre" class="font-weight-bold subtitle black--text d-block">Variables</label>
                    <label for="imagenes" class="subtitle">Selecciona la o las variables que correspondan a tu producto.</label>
                    <v-select outlined filled dense class="mt-2" style="width:300px" label="Selecciona" :items="['Colores','Tallas','Colores y Tallas','Sin variables']"></v-select>
                  </v-form>
                </v-card-text>
          </v-card>

          <v-row dense class="mt-2">
            <v-col cols="12" class="d-flex justify-md-end">
              <v-btn
                outlined
                class="
                  font-weight-bold
                  btn-border-black
                  texto-capitalizado
                  px-10
                  mr-2
                "
                small
                @click="returnStep(3)"
              >
                Paso anterior
              </v-btn>
              <v-btn
                color="primary"
                class="
                  font-weight-bold
                  btn-border-black
                  texto-capitalizado
                  px-16
                "
                small
                @click="changeStep(3)"
              >
                Guardar y finalizar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </panel-layout>
</template>

<script>
import PanelLayout from "../../../layouts/panelLayout";
import BackBtn from "../../../components/UI/BackBtnComponent";

export default {
  name: "nuevo-producto",
  components: { BackBtn, PanelLayout },
  data() {
    return {
      step: 1,
      formulario: {
        nombre: null,
        telefono: null,
      },
      valid: false,
      msgError: "Datos no validos",
      items: [
        {
          text: "Categoría",
          disabled: false,
        },
        {
          text: "Datos Generales",
          disabled: true,
        },
        {
          text: "Variables",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    changeStep(v) {
      if (v === 1) {
        this.items[0].disabled = true;
        this.items[1].disabled = false;
        this.items[2].disabled = true;
      } else if (v === 2) {
        this.items[0].disabled = true;
        this.items[1].disabled = true;
        this.items[2].disabled = false;
      }

      this.step = v + 1;
    },
    returnStep(v) {
      if (v === 2) {
        this.items[0].disabled = false;
        this.items[1].disabled = true;
        this.items[2].disabled = true;
      } else if (v === 3) {
        this.items[0].disabled = true;
        this.items[1].disabled = false;
        this.items[2].disabled = true;
      }
      this.step = v - 1;
    },
  },
};
</script>

<style scoped>
.v-application .primary {
  background-color: #06b0d7 !important;
  border-color: black !important;
}
</style>
