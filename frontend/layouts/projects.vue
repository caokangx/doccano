<template>
  <v-app>
    <the-header />
    <v-main>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          justify-center
        >
          <v-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader'
import TheFooter from '~/components/layout/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
