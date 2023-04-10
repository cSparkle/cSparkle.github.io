<template>
  <main>
    <h1 class="text-4xl text-center font-mono text-bright-green">Howdy, friend</h1>
    <p class="text-3xl text-center font-sans mb-12 text-white">The name's Cortney.</p>
    <section class="flex flex-col items-center">
      <div
        class="flex flex-col items-center md:flex-row md:items-baseline w-full lg:justify-around max-w-5xl"
      >
        <a href="#engineer" class="flex flex-col items-center justify-center w-fit">
          <img
            src="@/assets/images/developer.svg"
            alt="top down vector drawing of hands coding on a laptop"
            class="w-64"
          />
          <p class="text-bright-green font-sans font-medium text-xl flex items-center">
            Software Engineer
            <img
              src="@/assets/icons/arrow-right-solid.svg"
              alt="right arrow"
              aria-label="go to Software Engineer section"
              class="h-6 ml-2.5"
            />
          </p>
        </a>
        <a href="#bookworm" class="flex flex-col items-center justify-center my-16 w-fit">
          <img
            src="@/assets/images/bookworm.svg"
            alt="front on vector drawing of glasses on top of stacked books next to a coffee mug"
            class="w-64"
          />
          <p class="text-bright-green font-sans font-medium text-xl flex items-center">
            Bookworm
            <img
              src="@/assets/icons/arrow-right-solid.svg"
              aria-label="go to Bookworm section"
              alt="right arrow"
              class="h-6 ml-2.5"
            />
          </p>
        </a>
        <a href="#nerd" class="flex flex-col items-center justify-center my-16 w-fit">
          <img
            src="@/assets/images/fantasynerd.svg"
            alt="vector drawing of four costumed individuals at a gaming convention"
            class="w-64 md:pb-12"
          />
          <p class="text-bright-green font-sans font-medium text-xl flex items-center">
            Fantasy Nerd
            <img
              src="@/assets/icons/arrow-right-solid.svg"
              aria-label="go to Fantasy Nerd section"
              alt="right arrow"
              class="h-6 ml-2.5"
            />
          </p>
        </a>
      </div>

      <section class="bg-bright-green py-12 px-4 w-full">
        <div id="engineer" class="pt-28 flex flex-col items-center">
          <h2 class="text-center text-3xl font-mono font-medium text-dark-grey">
            Software Engineer
          </h2>
          <p class="font-sans pt-8 indent-12 max-w-2xl text-xl leading-10">
            I've been programming for nearly five years as a consultant in enterprise, startup, and
            educational sectors. I love all aspects of the development process, and I've done just
            about everything from creating and implementing UI designs to setting up databases and
            configuring devops pipelines. My most recent venture has been learning Microsoft Azure.
            Here's the languages and frameworks I'm most familiar with:
          </p>
          <div class="flex flex-wrap items-center justify-around my-6 lg:max-w-2xl">
            <img
              v-for="(icon, index) in softwareIconUrls"
              class="h-16 m-4 lg:h-20"
              :src="icon"
              :alt="`${icon} framework logo`"
              :key="index"
            />
          </div>
        </div>
        <div id="bookworm" class="pt-20 flex flex-col items-center">
          <h2 class="text-center text-3xl font-mono font-medium text-dark-grey mt-16">Bookworm</h2>
          <p class="font-sans pt-8 indent-12 max-w-2xl text-xl leading-10">
            I love to read, especially fantasy and sci-fi, but I'm already regularly reading
            software books to stay on the cutting edge of the field. Without a doubt, The Lord of
            the Rings is my favorite book, and I re-read it every few years along with The Hobbit
            and The Silmarillion to get even more immersed in the Tolkien-verse. Right now, I'm
            reading:
          </p>
          <ul class="flex flex-col items-center mt-6 text-center">
            <li class="font-sans text-xl pb-4">
              <strong class="font-sans text-xl">The Wheel of Time</strong>, by Robert Jordan
            </li>
            <li class="font-sans text-xl pb-4">
              <strong class="font-sans text-xl">Mindset</strong>, by Carol Dweck
            </li>
            <li class="font-sans text-xl">
              <strong class="font-sans text-xl">The Clean Coder</strong>, by Robert C. Martin
            </li>
          </ul>
        </div>
        <div id="nerd" class="pt-20 pb-20 flex flex-col items-center">
          <h2 class="text-center text-3xl font-mono font-medium text-dark-grey mt-16">
            Fantasy Nerd!
          </h2>
          <p class="font-sans pt-8 indent-12 max-w-2xl text-xl leading-10">
            Ever since I was young I've been immersed in all types of fantasy worlds. I love reading
            fantasy books, playing fantasy video and board games, and watching fantasy shows and
            movies. In the last few years, my friends and I have gotten into D&D, playing a home
            game and staying regularly tuned into our favorite D&D Twitch Stream, Critical Role.
          </p>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { getPosts } from '../services/contentful'

export default {
  name: 'HomeView',
  data() {
    return {
      softwareIconUrls: [],
      softwareIcons: [
        'angular',
        'react',
        'vue',
        'sass',
        'node',
        'ionic',
        'jest',
        'psql',
        'mongodb',
        'java',
        'jenkins',
        'git'
      ]
    }
  },
  methods: {
    createImageUrls() {
      this.softwareIcons.forEach((icon) => {
        this.softwareIconUrls.push(new URL(`/src/assets/icons/${icon}.png`, import.meta.url))
      })
    }
  },
  beforeMount() {
    this.createImageUrls()
  },
  created() {
    getPosts()
  }
}
</script>
