<template>
  <nav class="h-16 w-full flex flex-row bg-indigo-400 sticky top-0" style="">
    <NuxtLink
      to="/"
      class="font-display font-black mx-auto text-xl text-white ml-4 basis-1/12"
      >Tunahan Uysal</NuxtLink
    >
    <UBurgerButton
      @click="sideBarToggle = !sideBarToggle"
      :class="sideBarToggle ? '-rotate-90 mb-5 mr-0.5' : 'rotate-0 mt-2.5'"
      class="z-10 duration-300"
    />
    <div class="absolute flex flex-row-reverse w-full pointer-events-none">
      <div
        :class="sideBarToggle ? 'opacity-100' : '-mr-64 opacity-0'"
        class="duration-300 bg-black/25 h-screen pointer-events-auto w-64"
      >
        <div
          class="text-xl text-center text-white w-full flex flex-col justify-around mt-16 h-[75vh]"
        >
          <NuxtLink
            to="/about-me"
            class="font-display hover:text-zinc-100 hover:underline duration-75 cursor-pointer mb-4"
          >
            About Me
          </NuxtLink>
          <NuxtLink
            to=""
            class="font-display hover:text-zinc-100 hover:underline duration-75 cursor-pointer mb-4"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to=""
            class="font-display hover:text-zinc-100 hover:underline duration-75 cursor-pointer mb-4"
          >
            Programming
          </NuxtLink>
          <NuxtLink
            to=""
            class="font-display hover:text-zinc-100 hover:underline duration-75 cursor-pointer mb-4"
          >
            Worldbuilding
          </NuxtLink>
        </div>
        <div class="flex flex-col justify-end h-24">
          <span class="text-xs text-white text-center">
            Created by Tunahan Uysal
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import UBurgerButton from "~/components/UBurgerButton.vue";

export default {
  setup() {
    const sideBarToggle = ref(false);
    return {
      sideBarToggle,
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
