<template>
  <div class="basis-4/12 border-l my-16">
    <div class="border-l-slae-300 h-screen">
      <span class="font-title ml-4 underline decoration-double text-2xl">
        Latest Articles
      </span>
      <div
        class="rounded-lg bg-slate-50 w-9/12 mx-auto mt-6"
        v-for="post in posts.slice(0, 3)"
        :key="post.slug"
      >
        <NuxtLink :to="'/' + post.date.substring(0, 10) + '/' + post.name">
          <div class="flex flex-row">
            <!--

            <div class="flex flex-row">
              <ul v-for="tags in post.tags">
                <li>{{ tags }}</li>
              </ul>
            </div>

          -->
            <div class="basis-3/12">
              <div
                class="h-16 w-16 rounded-md bg-slate-200 m-4 bg-cover bg-center"
                :style="{ backgroundImage: 'url(' + post.img + ')' }"
              ></div>
            </div>
            <div class="basis-9/12 flex flex-col mt-5">
              <section class="text-sm basis-1/2">
                {{ post.title }}
              </section>
              <section class="basis-1/2 text-xs mt-2">
                {{ post.author }}
              </section>
            </div>
          </div>
          <div class="flex flex-row ml-4 gap-2">
            <section v-for="tags in post.tags" class="text-xs list-none mb-4">
              <NuxtLink :to="'/tags/' + tags">
                <span
                  class="rounded-xl bg-indigo-500 px-1.5 py -0.5 text-white"
                >
                  {{ tags }}
                </span>
              </NuxtLink>
            </section>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    const posts = await queryContent("blog").sort({ date: -1 }).find();
    return {
      posts,
    };
  },
};
</script>

<style></style>
