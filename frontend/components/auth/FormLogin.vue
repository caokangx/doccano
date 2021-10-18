<!-- 
程序名：登录表单
-->
<template>
  <base-card
    :disabled="!valid"
    :title="$t('user.logintitle')"
    :agree-text="$t('user.login')"
    :cancel-text="$t('user.registration')"
    @agree="tryLogin"
  >
    <template #content>
      <v-form v-model="valid">
        <!-- <v-alert
          v-show="showError"
          v-model="showError"
          type="error"
          dismissible
        >
          {{ $t('errors.invalidUserOrPass') }}
        </v-alert> -->
        <v-text-field
          v-model="username"
          :label="$t('请输入用户名')"
          name="username"
          append-icon="person"
          type="text"
          autofocus
          @keyup.enter="tryLogin"
        />
        <v-text-field
          id="password"
          v-model="password"
          :label="$t('请输入密码')"
          name="password"
          append-icon="lock"
          type="password"
          @keyup.enter="tryLogin"
        />
      </v-form>
    </template>
  </base-card>
</template>

<script lang="ts">
import Vue from "vue";
import { userNameRules, passwordRules } from "@/rules/index";
import BaseCard from "@/components/utils/BaseCard.vue";

export default Vue.extend({
  components: {
    BaseCard
  },

  props: {
    login: {
      type: Function,
      default: (username: string, password: string) => Promise,
    },
  },
  data() {
    return {
      valid: false,
      username: "",
      password: "",
      userNameRules,
      passwordRules,
      showError: false,
    };
  },

  methods: {
    async tryLogin() {
      try {
        await this.login({
          username: this.username,
          password: this.password,
        });
        // console.log(this.$route.fullPath.slice(25))
        // TODO: 匹配url
        if (this.$route.fullPath === "/") {
          this.$router.push(this.localePath("/projects"));
        } else {
          const str = "/projects/" + this.$route.fullPath.slice(25);
          this.$router.push(this.localePath(str));
        }
      } catch {
        this.showError = true;
      }
    },
  },
});
</script>