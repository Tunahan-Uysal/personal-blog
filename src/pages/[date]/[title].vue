<template>
  <div class="bg-gradient-to-b from-slate-200 to-50%">
    <UHeader/>
    <nuxt-content :document="markdownDocs" />
  </div>
</template>

<script lang="ts">

import UHeader from '../../components/UHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute();
  export default {


    async asyncData({$content, params}) {
    const markdownDocs = await $content(params.name).fetch()

    return {
      markdownDocs
    }
  }
}


</script>



<style>

</style>
