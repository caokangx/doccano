<template>
  <vue-qrcode v-if="urlPath" :value="urlPath"></vue-qrcode>
</template>
<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
  layout: "project",
  components: {
    VueQrcode,
  },
  data() {
    return {
      urlPath: ''
    }
  },
  mounted() {
    this.setUrl()
  },
  methods:{
    setUrl() {
      console.log(window.location.href.slice(0,-7))
      this.urlPath = window.location.href.slice(0,-7)
    }
  },
};
</script>
