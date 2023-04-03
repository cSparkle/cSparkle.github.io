<template>
  <header class="h-24 w-full sticky top-0 bg-dark-grey p-4">
    <nav class="flex justify-between items-center">
      <img
        src="../assets/images/cat-logo.svg"
        alt="vector drawing of cat in spacesuit floating through space"
        class="h-16"
      />

      <ul class="w-3/5 sm:w-2/5 lg:w-4/12 flex justify-between">
        <RouterLink
          to="/"
          class="font-sans font-medium"
          :class="{
            'text-bright-green': activeTab === 'home',
            'text-light-grey': activeTab !== 'home'
          }"
          @click.prevent="setActiveTab('home')"
          >Home</RouterLink
        >
        <RouterLink
          to="/resume"
          class="font-sans font-medium"
          :class="{
            'text-bright-green': activeTab === 'resume',
            'text-light-grey': activeTab !== 'resume'
          }"
          @click.prevent="setActiveTab('resume')"
          >Resumé</RouterLink
        >
        <RouterLink
          to="/contact"
          class="font-sans font-medium"
          :class="{
            'text-bright-green': activeTab === 'contact',
            'text-light-grey': activeTab !== 'contact'
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
