<template>
  <div class="basis-1/2 h-screen w-6/12 ml-16 flex flex-row justify-center" v-for="post in posts" :key="post.slug">
    <div class=" w-10/12 rounded-lg flex flex-col">
      <div class="w-11/12 h-72 bg-slate-400 mx-auto rounded-lg bg-cover bg-bottom" :style="{ backgroundImage: 'url(' + post.img + ')'}">
      </div>
      <h2 class="ml-4 font-['Lexend_Mega'] text-xl font-medium p-4">
        {{ post.title }}
      </h2>
      <p class="mx-6 text-transparent bg-clip-text bg-gradient-to-b  from-black">
        {{ post.shortDescription }}
      </p>
      <div class="basis-1/4 flex flex-row-reverse">
        <NuxtLink :to="'../pages/' + post.date + '/' +post.title">
          <UButton />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import UButton from '~/components/UButton.vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

export default {
  /*
  async asyncData({ $content }) {
    const posts = await $content('', {deep: true})
    .sortBy('date', 'asc')
    .fetch()
    console.log(posts)
    //const sortedPosts = posts.sort((a, b) => new Date(a.date) - new Date(b.date))
    return { posts }
  },
  */

  //todo: figure out what you did right
 async setup() {

  const posts = await queryContent('blog')
  .sort({date: -1})
  .find();

    const shortDescription = ref("");

    posts.forEach((post) => {
      post.shortDescription = post.description.substring(0, 247) + "...";    
      console.log(post.description, post.shortDescription);
    })
    return {
      posts,
    };
 }

}
</script>


<style>

</style>
