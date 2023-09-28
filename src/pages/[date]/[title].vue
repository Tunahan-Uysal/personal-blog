<template>
  <div class="bg-gradient-to-b from-slate-200 to-50%">
    <UHeader/>
    <ContentDoc :path="contentPath"/>
    <span>{{ $route.params.group }} and {{ $route.params.id }}</span>
  </div>
</template>

<script lang="ts">
import UHeader from '../../components/UHeader.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    UHeader
  },
  setup() {
    const route = useRoute();
    const contentPath = `src/content/blog/${route.params.name}`;
    console.log(contentPath);

    return {
      contentPath
    };
  }
}
</script>



<style>

</style>
