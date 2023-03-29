<template>
  <header class="h-20 w-screen fixed">
    <nav class="flex justify-between items-center p-4 bg-white">

        <img
          src="../assets/images/cat-logo.jpg"
          alt="vector drawing of cat in spacesuit floating through space"
          class="h-16"
        />

      <ul class="w-3/5 flex justify-between">
        <RouterLink to="/" class="text-dark-grey font-sans font-medium">Home</RouterLink>
        <RouterLink to="/about" class="text-dark-grey font-sans font-medium">About</RouterLink>
        <RouterLink to="/contact" class="text-dark-grey font-sans font-medium">Contact</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.logo-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background: #5ae3a9;
  border-radius: 50%;
  box-shadow: -20px -20px 25px #fff, 3px 3px 20px #a6a8a8, inset -3px -3px 10px #5ae3a9;
  position: relative;
}
</style>
