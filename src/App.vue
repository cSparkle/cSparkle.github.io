<template class="font-sans">
  <MainHeader />
  <RouterView />
</template>

<script setup>
import MainHeader from './components/MainHeader.vue'
import { RouterView } from 'vue-router'
</script>
