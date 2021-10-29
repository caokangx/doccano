<template>
  <v-app>
    <the-header>
      <template #leftDrawerIcon>
        <v-app-bar-nav-icon @click="drawerLeft = !drawerLeft" />
      </template>
    </the-header>

    <v-navigation-drawer v-model="drawerLeft" app clipped color="">
      <the-side-bar
        :link="getLink"
        :role="getCurrentUserRole"
        :project="currentProject"
      />
    </v-navigation-drawer>

    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex fill-height>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import TheSideBar from "~/components/layout/TheSideBar";
import TheHeader from "~/components/layout/TheHeader";
import TheFooter from '~/components/layout/TheFooter'

export default {
  middleware: ["check-auth", "auth", "check-admin"],

  components: {
    TheSideBar,
    TheHeader,
    TheFooter
  },

  data() {
    return {
      drawerLeft: null,
    };
  },

  computed: {
    ...mapGetters("projects", [
      "getLink",
      "getCurrentUserRole",
      "currentProject",
    ]),
  },
};
</script>
