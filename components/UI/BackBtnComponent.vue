<template>
  <v-btn
    :color="color"
    small
    text
    rounded
    @click.native="back"
  >
    <v-icon left>mdi-chevron-left</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>

export default {
  name: 'BackBtn',
  props: {
    color: {
      type: String,
      required: false,
      default: "error"
    },
    text: {
      type: String,
      required: false,
      default: 'Regresar'
    }
  },
  data() {
    return {
      //
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}

</script>
