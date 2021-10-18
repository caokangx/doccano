<!--
程序名：网站登录页面
-->
<template>
  <v-app id="inspire">
    <v-main>
      <!-- <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            
          </v-col>
        </v-row>
        
      </v-container> -->
      <form-login-2 :login="authenticateUser" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import FormLogin2 from "@/components/auth/FormLogin2.vue";

export default Vue.extend({
  components: {
    FormLogin2
  },
  methods: {
    ...mapActions("auth", ["authenticateUser"]),
  },
});
</script>
