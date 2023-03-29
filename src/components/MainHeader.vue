<template>
  <header class="h-20 w-screen fixed">
    <nav class="flex justify-between items-center p-4 bg-white">
      <img
        src="../assets/images/cat-logo.jpg"
        alt="vector drawing of cat in spacesuit floating through space"
        class="h-16"
      />

      <ul class="w-3/5 flex justify-between">
        <RouterLink
          to="/"
          class="font-sans font-medium"
          :class="{
            'text-bright-green': activeTab === 'home',
            'text-dark-grey': activeTab !== 'home'
          }"
          @click.prevent="setActiveTab('home')"
          >Home</RouterLink
        >
        <RouterLink
          to="/resume"
          class="font-sans font-medium"
          :class="{
            'text-bright-green': activeTab === 'resume',
            'text-dark-grey': activeTab !== 'resume'
          }"
          @click.prevent="setActiveTab('resume')"
          >Resume</RouterLink
        >
        <RouterLink
          to="/contact"
          class="font-sans font-medium"
          :class="{
            'text-bright-green': activeTab === 'contact',
            'text-dark-grey': activeTab !== 'contact'
          }"
          @click.prevent="setActiveTab('contact')"
          >Contact</RouterLink
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      activeTab: 'home'
    }
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName
    }
  }
}
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
