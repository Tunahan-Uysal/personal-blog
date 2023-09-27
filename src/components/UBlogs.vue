<template>
  <div class="basis-1/2 h-screen w-6/12 ml-16 flex flex-row justify-center" v-for="post in posts" :key="post.slug">
    <div class=" w-10/12 h-[512px] rounded-lg flex flex-col">
      <div class="w-11/12 bg-slate-400 mx-auto rounded-lg bg-cover bg-bottom basis-2/4"
        style="background-image: url(https://images.unsplash.com/photo-1681506540686-126384e54751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80);">
      </div>
      <p class="mx-6 text-transparent bg-clip-text bg-gradient-to-b from-black via-black via-50 basis-1/4">
        {{ post.description }}
      </p>
      <div class="basis-1/4 flex flex-row-reverse">
        <UButton />
        <ContentDoc v-slot="{ doc }" path="/blog">
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import UButton from '~/components/UButton.vue'
import useContent from '@nuxt/content';

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
 async setup() {

  const posts = await queryContent('blog')
  .sort({date: 1})
  .find()
    return { posts }
 }

}
</script>


<style>
.bg-opacity-gradient-to-b {
  -webkit-mask-image: -webkit-gradient(linear, top, bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
  mask-image: -webkit-gradient(linear, top, bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)))
}

.bg-opacity-gradient-to-t {
  -webkit-mask-image: -webkit-gradient(linear, bottom, top, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
  mask-image: -webkit-gradient(linear, bottom, top, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)))
}
</style>
