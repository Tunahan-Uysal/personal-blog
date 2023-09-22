<template>
    <button class="w-32 h-12 bg-gradient-to-tl from-blue-600 via-60% via-sky-500 to-blue-400 background-animate mt-12 mr-8 rounded-md transition-all text-center">
      <span class="text-center text-white text-lg">Visit</span>
    </button>
</template>

<script lang="ts" setup>

</script>



<style>

.background-animate:hover {
    background-size: 200%;

    -webkit-animation: AnimationName 1s ease;
    -moz-animation: AnimationName 1s ease;
    animation: AnimationName 1s ease;
  }

  @keyframes AnimationName {

    0%, {
      background-position: 0% 50%;
    },
    50% {
      background-position: 50% 100%;
    },
    100% {
      background-position: 50% 0%;
    }

  }
</style>
