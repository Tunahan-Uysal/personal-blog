<template>
  <div class="h-screen bg-gradient-to-b from-slate-200 to-[50vh]">
    <UHeader />
    <div class="flex">
      <div
        class="basis-8/12 w-10/12 rounded-md mt-12 bg-fixed bg-cover bg-center flex flex-col"
      >
        <main
          class="mt-8 w-11/12 font-light font-article"
          v-for="post in posts"
        >
          <NuxtLink :to="'/' + post.date.substring(0, 10) + '/' + post.name">
            <div
              class="w-10/12 rounded-lg flex flex-row shadow-md hover:shadow-xl duration-200 hover:scale-[1.01] ml-8"
            >
              <div class="basis-3/12 my-3">
                <div
                  class="w-28 h-28 my-auto bg-slate-400 mx-auto rounded-lg bg-cover bg-bottom"
                  :style="{ backgroundImage: 'url(' + post.img + ')' }"
                ></div>
              </div>
              <div class="flex flex-col">
                <h2 class="ml-4 mt-5 text-xl font-medium basis-1/2">
                  {{ post.title }}
                </h2>
                <p class="ml-4 basis-1/2">
                  {{ post.author }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </main>
      </div>
      <UTredingBar />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    const route = useRoute();

    const posts = await queryContent("blog")
      // @ts-ignore
      .where({ tags: { $in: [route.params.tag] } })
      .find();

    const shortDescription = ref("");

    function printValues(blogDate: string, blogName: string) {
      alert(blogDate + ", " + blogName);
    }

    return {
      posts,
      route,
      printValues,
    };
  },
};
</script>

<style></style>
