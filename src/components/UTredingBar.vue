<template>
  <div class="basis-4/12 border-l ">
    <div class="border-l-slate-300 h-screen">
      <section class="font-semibold ml-4 underline decoration-double text-2xl text-center lg:text-left">
        {{ $t('newBlogpost') }}
      </section>
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
              <section class="basis-1/2 text-xs mt-2 text-slate-800 breadcrumb">
                <span>{{ post.author }}</span>
                <span>{{ post.date.substring(0, 10) }}</span>
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
    const { locale } = useI18n()
    const posts = await queryContent("blog").sort({ date: -1 }).find();
    return {
      posts,
      locale,
    };
  },
};
</script>

<style>

.breadcrumb span + span::before {
  display: inline-block;
  margin: 0.1em .25em;
  border: .2em solid gray;
    border-radius: 50%;
  height: .025em;
  content: '';
}

</style>
