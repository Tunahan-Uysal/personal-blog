<template>
  <div class="pb-8 z-50">
    <nav
      class="h-16 flex flex-row justify-between bg-indigo-400 sticky top-0 z-20"
      style=""
    >
      <NuxtLink
        to="/"
        class="font-display font-black text-xl text-white ml-2 mt-[0.075rem] w-[12%] absolute"
        >Tunahan Uysal</NuxtLink
      >
      <div class="flex flex-col w-full">
        <section class="flex flex-row justify-center">
          <USearchbox />
        </section>
        <section class="flex flex-row">
          <UDropdownMenu class="mx-auto -mt-5 bg-white rounded-full p-1 border-2 border-indigo-400"/>
        </section>
      </div>
      

      <UBurgerButton
        @click="sideBarToggle = !sideBarToggle"
        :class="
          sideBarToggle ? '-rotate-90 mb-5 ml-[94.99vw]' : 'rotate-0 mt-2.5'
        "
        class="z-10 duration-300 absolute ml-[96vw]"
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
  </div>
</template>

<script lang="ts">
import UBurgerButton from "~/components/UBurgerButton.vue";
import UDropdownMenu from "./UDropdownMenu.vue";
import USearchbox from "~/components/USearchbox.vue";
import { ref, watch } from "vue";

export default {
  setup() {
    const sideBarToggle = ref(false);
    const searchBoxToggle = ref(false);
    const USearchBox = ref(null);
    const isDocumentHidden = ref(false);

    let isMounted = false;

    onMounted(() => {
      isMounted = true;
    });

    const handleVisChange = () => {
      if (isMounted) {
        isDocumentHidden.value = document.hidden;
        searchBoxToggle.value = isDocumentHidden.value;
        console.log(isDocumentHidden.value);
      }
    };

    onBeforeMount(() => {
      document.addEventListener("visibilitychange", handleVisChange);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("visibilitychange", handleVisChange);
    });

    return {
      sideBarToggle,
      searchBoxToggle,
      USearchBox,
      isDocumentHidden,
      handleVisChange,
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
