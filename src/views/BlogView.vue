<template>
    <main>
        <h1>Blog</h1>

    <BlogPost v-for="post in blogPosts" :title="post.fields.title" :date="post.fields.date" :bodyContent="post.fields.body"  />

    </main>

  
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import { getPosts } from '../services/contentful'

export default {
  name: 'BlogView',
  components: {
    BlogPost
  },
  data() {
    return {
      blogPosts: null
    }
  },
  mounted() {
    getPosts().then((response) => {
      console.log('sdlgn', response)
      this.blogPosts = response.items
    })
    // this.blogPosts = getPosts();
    // console.log('posts: ', this.blogPosts)
  }
}
</script>
