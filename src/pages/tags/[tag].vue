<template>
  <div class="h-screen bg-gradient-to-b from-slate-200 to-[50vh]">
    <UHeader />
    <div class="flex">
      <div
        class="basis-8/12 w-10/12 rounded-md h-3/4 -py-8 bg-fixed bg-cover bg-center flex justify-center"
      >
        <main
          class="mt-16 w-11/12 font-light font-article flex flex-col"
          v-for="post in posts"
        >
          <div class="bg-gray-500">
            <h1>{{ post.title }}</h1>
          </div>
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
