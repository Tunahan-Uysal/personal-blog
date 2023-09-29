<template>
  <div class="bg-gradient-to-b from-slate-200 to-50%">
    <UHeader/>
    <ContentDoc :path="'/blog/' + route.params.title"/>
    <span>{{ route.params.date }} and {{ route.params.title }}</span>
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

    const currentName = ref("");

    currentName.value = route.params.title.toLowerCase();

    console.log("checkthisout:", route.path);

    return {
      route
    };
  }
}
</script>



<style>

</style>
