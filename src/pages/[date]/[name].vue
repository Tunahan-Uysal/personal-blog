<template>
  <div class="h-screen bg-gradient-to-b from-slate-200 to-[50vh]">
    <UHeader />
    <div class="flex">
      <div
        class="basis-8/12 w-10/12 rounded-md h-3/4 -py-8 bg-fixed bg-cover bg-center flex justify-center"
      >
        <main class="mt-16 w-11/12 font-light font-article">
          <h1 class="font-['Lexend_Mega'] text-center text-2xl font-bold">
            {{ articles.title }}
          </h1>

          <h3 class="px-16 text-lg mt-6 mb-3">
            {{ articles.description }}
          </h3>
          <div
            class="bg-cover bg-bottom mx-auto w-10/12 h-72"
            :style="{ backgroundImage: 'url(' + articles.img + ')' }"
          ></div>
          <ContentDoc
            class="px-16 text-lg mt-3"
            :path="'blog/' + articles.name"
          />
        </main>
      </div>
      <UTredingBar />
    </div>
  </div>
</template>

<script lang="ts">
import UHeader from "../../components/UHeader.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    UHeader,
  },
  async setup() {
    const route = useRoute();

    const articles = await queryContent("blog")
      .where({ name: route.params.name })
      .findOne();

    const currentName = ref("");

    console.log("checkthisout:", articles.img, articles.title);

    return {
      route,
      articles,
    };
  },
};
</script>

<style>
ul {
  list-style-type: disc;
  margin-left: 32px;
  padding-bottom: 16px;
}
h2 {
  font-size: xx-large;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
