<template>
  <div class="basis-1/2 h-screen w-6/12 ml-16 flex flex-row justify-center border border-black">
    <div class=" w-10/12 h-[512px] mt-10 bg-gray-500 rounded-lg flex flex-col">
      <div class="w-11/12 bg-slate-400 mt-4 mx-auto rounded-lg bg-cover bg-bottom basis-2/4" style="background-image: url(https://images.unsplash.com/photo-1681506540686-126384e54751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80);">
      </div>
      <p class="mx-6 text-transparent bg-clip-text bg-gradient-to-b from-black via-black via-50 basis-1/4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam nihil et minima est voluptatibus sit, odio totam assumenda saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, enim! Lorem ipsum dolor sit amet.
      </p>
      <div class="basis-1/4 flex flex-row-reverse">
        <UButton/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import UButton from '~/components/UButton.vue'

</script>


<style>

.bg-opacity-gradient-to-b{
  -webkit-mask-image: -webkit-gradient(linear, top, bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, top, bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
      
}
.bg-opacity-gradient-to-t{
  -webkit-mask-image: -webkit-gradient(linear, bottom, top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: -webkit-gradient(linear, bottom, top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))
}
</style>
