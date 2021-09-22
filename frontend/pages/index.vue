<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <form-login :login="authenticateUser" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import FormLogin from "@/components/auth/FormLogin.vue";

export default Vue.extend({
  components: {
    FormLogin,
  },
  // mounted() {
  //   this.print()
  // },
  methods: {
    ...mapActions("auth", ["authenticateUser"]),
    // print() {
    //   console.log(this.$route.fullPath)
    // }
  },

  // middleware({store, redirect}) {
  //   if(!store.state.getters['auth/isAuthenticated']) {
  //     console.log('111')
  //   }
  // }
});
</script>
