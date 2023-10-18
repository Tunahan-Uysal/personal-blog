<template>
  <nav
    class="h-16 flex flex-row justify-between bg-indigo-400 sticky top-0"
    style=""
  >
    <NuxtLink
      to="/"
      class="font-display font-black text-xl text-white ml-4 basis-1/12"
      >Tunahan Uysal</NuxtLink
    >
    <div
      class="my-auto mr-28 bg-white h-1/2 w-64 rounded-xl shadow-xl py-0.5 mx-5 indent-3"
    >
      <input
        type="search"
        name=""
        id=""
        class="form-input my-0.5 w-9/12 border-r mr-3.5 outline-none"
        maxlength="33"
        placeholder="Search anything!"
      />
      <NuxtLink to="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline mb-[0.313rem] scale-25 hover:scale-110 hover:stroke-blue-950"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </NuxtLink>
    </div>

    <UBurgerButton
      @click="sideBarToggle = !sideBarToggle"
      :class="
        sideBarToggle ? '-rotate-90 mb-5 mr-0.5 -ml-0.5' : 'rotate-0 mt-2.5'
      "
      class="z-10 duration-300"
    />
    <div class="absolute flex flex-row-reverse w-full pointer-events-none">
      <div
        :class="sideBarToggle ? 'opacity-100' : '-mr-64 bg-black/40'"
        class="duration-300 bg-black/90 h-screen pointer-events-auto w-64"
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
      <div
        :class="sideBarToggle ? 'opacity-100' : 'opacity-0'"
        class="duration-200 bg-black/75 h-screen pointer-events-none w-full"
      ></div>
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
