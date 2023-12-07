<template>
  <div class="bg-gradient-to-b from-slate-200 to-[50vh]">
    <UHeader />
    <main class="flex flex-col lg:flex-row">
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 basis-8/12">
        <UBlogs />
      </div>
      <UTredingBar />
    </main>
  </div>
</template>

<script lang="ts" setup>
import UHeader from "~/components/UHeader.vue";
import UBlogs from "~/components/UBlogs.vue";


</script>

<style></style>
