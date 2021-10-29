<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        white
        lighten-2
        py-4
        text-center
        black--text
        xs12
      >
        &copy; {{ new Date().getFullYear() }} 由 <a href="http://www.jssi.org.cn/" target="_blank">江苏省缺陷产品管理技术中心</a> 研制
      </v-flex>
    </v-layout>
  </v-footer>
</template>
