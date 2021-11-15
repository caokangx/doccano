<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col :cols="12">
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <!-- <img src="/frontend/static/m.png" alt="Vue Material" height="48" contain /> -->
            <div class="primary--text display-1">轻量化标注平台</div>
          </v-card-title>
          <v-card-text>
            <v-alert type="success"> {{ $t('测试用户') }} : admin/123456 </v-alert>
            <v-form ref="form" v-model="valid" class="my-10" lazy-validation>
              <v-text-field
                v-model="username"
                append-icon="mdi-email"
                autocomplete="off"
                name="login"
                :label="$t('用户名')"
                :placeholder="$t('请输入用户名')"
                type="text"
                required
                outlined
                :rules="formRule.username"
              />
              <v-text-field
                v-model="password"
                append-icon="mdi-lock"
                autocomplete="off"
                name="password"
                :label="$t('密码')"
                :placeholder="$t('请输入密码')"
                type="password"
                :rules="formRule.password"
                required
                outlined
                @keyup.enter="tryLogin"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!-- <v-tooltip v-for="item in socialIcons" :key="item.text" bottom>
              <template #activator="{ on, attrs }">
                <v-btn color="primary" icon v-bind="attrs" v-on="on" @click="handleSocialLogin">
                  <v-icon v-text="item.icon" />
                </v-btn>
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip> -->
            <v-spacer />
            <v-btn large text @click="tryRegister">
              {{ $t('user.register') }}
            </v-btn>
            <v-btn large tile color="primary" :loading="loading" @click="tryLogin">
              {{ $t('user.login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
// const name = 'page-login'
// import {userNameRules, passwordRules} from "@/rules/index";

export default Vue.extend({
//   name: name,
  props: {
      login: {
          type: Function,
          default: (username: string, password: string) => Promise,
      },
      register: {
        type: Function,
        default: (username: string, password: string) => Promise, 
      }
  },
  data() {
    return {
    //   loading: false,
    //   formValid: false,
    //   formModel: {
    //     username: 'admin',
    //     password: 'admin',
    //   },
      loading: false,
      valid: false,
      username: "",
      password: "",
      showError: false,

      formRule: {
        username: [(v: any) => !!v || this.$t('用户名不能为空', ['username'])],
        password: [(v: any) => !!v || this.$t('密码不能为空', ['password'])],
      },
    //   socialIcons: [
    //     {
    //       text: 'Google',
    //       icon: 'mdi-google',
    //     },
    //     {
    //       text: 'Facebook',
    //       icon: 'mdi-facebook',
    //     },
    //     {
    //       text: 'Twitter',
    //       icon: 'mdi-twitter',
    //     },
    //   ],
    }
  },
  computed: {},
  methods: {
    // handleLogin() {
    //   if (this.$refs.form.validate()) {
    //     this.loading = true
    //     this.$store
    //       .dispatch('login', this.formModel)
    //       .then(() => {
    //         const redirect = this.$route.query.redirect
    //         const route = redirect ? { path: redirect } : { path: '/' }
    //         this.$router.push(route)
    //         this.loading = false
    //       })
    //       .catch(() => {
    //         window._VMA.$emit('SHOW_SNACKBAR', {
    //           show: true,
    //           text: 'Auth Failed',
    //           color: 'error',
    //         })
    //         this.loading = false
    //       })
    //   }
    // },
    async tryLogin() {
      // console.log(this.$route.query.redirect)
        // try {
        //     await this.login({
        //         username: this.username,
        //         password: this.password,
        //     });
        //     const redirect = this.$route.query.redirect
            // const route = redirect ? {path: redirect} : {path: '/'}
            // this.$router.push(route)
        // } catch {
        //     this.showError = true;
        // }
        const redirect = this.$route.query.redirect
        console.log(redirect)
        if (redirect) {
          // 对应二维码扫描登录的情况
          const defaultPass = "Qwer1234."
          const defaultUserPrefix = "user"
          // 生成随机用户名
          const username = defaultUserPrefix + (new Date()).valueOf()
          // 模拟注册
          try {
            await this.$services.auth.register(username, defaultPass, defaultPass)
            console.log("register success")
          } catch {
            this.showError = true;
          }
          try {
              await this.$services.auth.login(username, defaultPass)
            } catch {
              this.showError = true;
          }
          // 获取登录用户信息
          try {
            await this.$store.dispatch('auth/initAuth')
          } catch (error) {
            console.log(error)
          }
          console.log(this.$store.getters['auth/getUserId'])
          const userid = this.$store.getters['auth/getUserId']
          // 添加为Annotator
          const roleid = "2"
          const projectid = redirect.slice(-1);
          console.log(projectid)
          try {
            await this.$services.role.addAnnotator(projectid, userid, roleid)
          } catch (error) {
            console.log(error)
          }
          console.log('success')

          const route: any = redirect ? {path: redirect} : {path: '/projects'}
          this.$router.push(route)
        } else {
          try {
            // await this.$services.auth.login(this.username, this.password)
            await this.login({
              username: this.username,
              password: this.password,
            });
            const route = redirect ? {path: redirect} : {path: '/projects'}
            this.$router.push(route)
          } catch {
            this.showError = true;
          }
        }
    },
    tryRegister() {
      // console.log(this.$refs.form.validate())
    },
    trySocialLogin() {},
  },
});
</script>

<style lang="sass" scoped>
.page-login
  max-width: 600px
  margin: 0 auto
</style>
