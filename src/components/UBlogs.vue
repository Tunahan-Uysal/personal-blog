<template>
  
  <div
    class="h-full flex flex-row justify-center"
    
    v-for="post in posts"
    :key="post.slug"
  >
  <NuxtLink :to="'/' + post.date.substring(0, 10) + '/' + post.name">
    <div class="mx-auto w-10/12 rounded-lg flex flex-col">
        <div
          class="w-10/12 h-[33vh] lg:h-[15vw] bg-slate-400 mx-auto rounded-lg bg-cover bg-bottom"
          :style="{ backgroundImage: 'url(' + post.img + ')' }"
        ></div>
      <h2 class="text-xl font-semibold text-center flex-grow min-h-[3.25rem]">
        {{ post.title }}
      </h2>
      <p class="mx-6 line-clamp-5 text-slate-800 mb-4">
        {{ post.description }}
      </p>  
    </div>
  </NuxtLink>
  </div>
</template>

<script lang="ts">

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
    const { locale } = useI18n()
    const posts = await queryContent("blog/"+locale.value).sort({ date: -1 }).find();
    console.log(locale)
    const shortDescription = ref("");
    //@ts-ignore
    posts.forEach((post) => {
      post.shortDescription = post.description.substring(0, 247) + "...";
      console.log(post.description, post.shortDescription);
    });

    function printValues(blogDate: string, blogName: string) {
      alert(blogDate + ", " + blogName);
    }

    return {
      posts,
      printValues,
    };
  },
};
</script>

<style></style>
