<template>
  <div class="bg-gradient-to-b from-slate-200 to-50%">
    <UHeader />
    <main class="flex">
      <div class="grid grid-cols-2 mt-8 basis-8/12">
        <UBlogs />
      </div>
      <UTredingBar />
    </main>
  </div>
</template>

<script lang="ts" setup>
import UHeader from "~/components/UHeader.vue";
import UTrendingBar from "~/components/UTredingBar.vue";
import UBlogs from "~/components/UBlogs.vue";
</script>

<style></style>
