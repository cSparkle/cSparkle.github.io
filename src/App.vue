<template>
  <MainHeader />
  <RouterView class="pt-32"/>
  <MainFooter />
</template>

<script setup>
import MainFooter from './components/MainFooter.vue'
import MainHeader from './components/MainHeader.vue'
import { RouterView } from 'vue-router'
import { ref, watch } from 'vue'

let pathname = ref(window.location.pathname)

console.log({ pathname })

watch(pathname, (oldValue, newValue) => {
  console.log({ pathname })
  console.log({ oldValue })
  console.log({ newValue })
})
</script>
