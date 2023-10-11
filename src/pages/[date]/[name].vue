<template>
  <div class="h-screen bg-gradient-to-b from-slate-200 to-50%">
    <UHeader/>
    <div class="flex">
      <div class="basis-8/12 w-10/12 rounded-md h-3/4 mb-16 pb-4 -py-8 bg-fixed bg-cover bg-center flex justify-center">
        <main class="mt-16 w-9/12 shadow-lg rounded-t-lg">
          <h1 class="font-['Lexend_Mega'] text-center text-2xl font-bold">{{ articles.title }}</h1>

          <h3 class="px-16 font-serif text-lg mt-6 mb-3">{{ articles.description }}</h3>
          <div class="bg-cover bg-bottom mx-auto w-10/12 h-72" :style="{ backgroundImage: 'url(' + articles.img + ')' }">

          </div>
          <ContentDoc class="px-16 font-serif text-lg mt-3" :path="'blog/'+articles.name"/>
        </main>
      </div>
      <div class="basis-4/12">
        <div class="mt-16 w-full shadow-lg h-screen">
          <div class="rounded-lg bg-slate-50 h-96 w-9/12 mx-auto mt-12">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UHeader from '../../components/UHeader.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    UHeader
  },
  async setup() {

    const route = useRoute();
  
    const articles = await queryContent('blog').where({ name: route.params.name }).findOne();

    const currentName = ref("");
    
    
    console.log("checkthisout:", articles.img, articles.title);

    return {
      route,
      articles
    };
  }
}
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
