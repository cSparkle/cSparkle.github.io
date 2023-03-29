<template>
  <MainHeader />
  <RouterView class="pt-32"/>
  <MainFooter />
</template>

<script setup>
import MainFooter from './components/MainFooter.vue'
import MainHeader from './components/MainHeader.vue'
import { RouterView } from 'vue-router'
</script>
