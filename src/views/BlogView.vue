<template>
  <h1>Blog</h1>
</template>

<script>
import { getPosts } from '../services/contentful'

export default {
  name: 'BlogView',
  data() {
    return {
      blogPosts: []
    }
  },
  async mounted() {
    try {
      const testing = await getPosts()
      console.log({ testing })
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
