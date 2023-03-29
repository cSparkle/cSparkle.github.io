<template>
  <main>
    <h2 class="text-4xl text-center font-mono text-bright-green">Howdy, friend</h2>
    <h3 class="text-3xl text-center font-sans mb-12">The name's Cortney.</h3>
    <section>
      <a href="#engineer" class="flex flex-col items-center justify-center">
        <img
          src="../assets/images/developer.jpg"
          alt="top down vector drawing of hands coding on a laptop"
          class="w-64"
        />
        <p class="text-dark-grey font-sans font-medium text-xl flex items-center">
          Software Engineer
          <img src="../assets/icons/arrow-right-solid.svg" alt="right arrow" class="h-6 ml-2.5" />
        </p>
      </a>
      <a href="#bookworm" class="flex flex-col items-center justify-center my-16">
        <img
          src="../assets/images/bookworm.jpg"
          alt="front on vector drawing of glasses on top of stacked books next to a coffee mug"
          class="w-64"
        />
        <p class="text-dark-grey font-sans font-medium text-xl flex items-center">
          Bookworm
          <img src="../assets/icons/arrow-right-solid.svg" alt="right arrow" class="h-6 ml-2.5" />
        </p>
      </a>
      <a href="#nerd" class="flex flex-col items-center justify-center my-16">
        <img
          src="../assets/images/fantasynerd.jpg"
          alt="vector drawing of four costumed individuals at a gaming convention"
          class="w-64"
        />
        <p class="text-dark-grey font-sans font-medium text-xl flex items-center">
          Fantasy Nerd
          <img src="../assets/icons/arrow-right-solid.svg" alt="right arrow" class="h-6 ml-2.5" />
        </p>
      </a>
      <section class="bg-bright-green py-12 px-4">
        <div id="engineer" class="pt-28">
          <h2 class="text-center text-2xl font-mono font-medium text-dark-grey">
            Software Engineer
          </h2>
          <p class="font-sans pt-8">
            I've been programming for nearly five years as a consultant in different sectors. I love
            all aspects of the development progress, and I've done just about everything from
            creating and implementing UI designs to setting up databases and configuring devops
            pipelines. My most recent venture has been learning Microsoft Azure. Here's the
            languages and frameworks I'm most familiar with:
          </p>
          <div class="flex flex-wrap items-center justify-around my-6">
            <img
              v-for="(icon, index) in softwareIcons"
              class="h-16 m-4"
              :src="`src/assets/icons/${icon}.png`"
              :alt="`${icon} framework logo`"
              :key="index"
            />
          </div>
        </div>
        <div id="bookworm" class="pt-20">
          <h2 class="text-center text-2xl font-mono font-medium text-dark-grey mt-16">Bookworm</h2>
          <p class="font-sans pt-8">
            I love to read, especially fantasy and sci-fi, but I'm already regularly reading
            software books to stay on the cutting edge of the field. Without a doubt, The Lord of
            the Rings is my favorite book, and I re-read it every few years along with The Hobbit
            and The Silmarillion to get even more immersed in the Tolkien-verse.
            <br />
            Right now, I'm reading:
          </p>
          <ul class="list-disc flex flex-col items-center mt-6">
            <li>The Wheel of Time (curently on book 7)</li>
            <li>Mindset, by Carol Dweck</li>
            <li>The Clean Coder, by Robert C. Martin</li>
          </ul>
        </div>
        <div id="nerd" class="pt-20">
          <h2 class="text-center text-2xl font-mono font-medium text-dark-grey mt-16">
            Fantasy Nerd!
          </h2>
          <p class="font-sans pt-8">
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
export default {
  name: 'HomeView',
  data() {
    return {
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
  }
}
</script>
