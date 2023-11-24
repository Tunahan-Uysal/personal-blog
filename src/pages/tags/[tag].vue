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
              class="w-10/12 rounded-lg flex flex-row duration-200 hover:scale-[1.03] ml-8"
            >
              <div class="basis-6/12 my-3">
                <div
                  class="w-28 h-28 my-auto bg-slate-400 mx-auto rounded-lg bg-cover bg-bottom mb-8"
                  :style="{ backgroundImage: 'url(' + post.img + ')' }"
                ></div>
              </div>
              <div class="flex flex-col">
                <h2 class="ml-4 text-xl font-medium">
                  {{ post.title }}
                </h2>
                <p class="ml-4 line-clamp-3 text-slate-800">
                  {{ post.description }}
                </p>

                <div class="mt-4 ml-4 text-slate-800 breadcrumb">
                  <span class="">{{ post.author }}</span>
                  <span class="">{{ formatGivenDate(post.date.substring(0, 10)) }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
          <hr class="mt-8">
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

    function formatGivenDate(dateStr: string) {

      let date = new Date(dateStr);

      let year: number = date.getFullYear();
      let day: any = date.getDate();
      const formatter = new Intl.DateTimeFormat('en', {month: 'long'});

      day = String(day).padStart(2, '0'); // ensure day is two digits

      return formatter.format(date)+' '+day+', '+year;
    }

    return {
      posts,
      route,
      printValues,
      formatGivenDate,
    };
  },
};
</script>

<style>

.breadcrumb span + span::before {
  display: inline-block;
  margin: 0.1em 0.66em;
  border: .2em solid gray;
    border-radius: 50%;
  height: .025em;
  content: '';
}

</style>

