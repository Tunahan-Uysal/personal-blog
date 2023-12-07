<template>
  <div
    class="my-auto mr-28 bg-white h-1/2 rounded-xl py-0.5 mx-5 indent-3 duration-300"
    :class="{
      'w-[30rem] scale-110 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]': searchBoxToggle,
      'w-60 drop-shadow-lg': !searchBoxToggle,
    }"
    @focusin="searchBoxToggle = true"
    @focusout="delayFocusToggle"
  >
    <input
      type="search"
      name=""
      id=""
      class="form-input my-0.5 w-9/12 border-r mr-2.5 outline-none duration-300"
      maxlength="45"
      :placeholder="$t('searchBoxSuggestion')"
      ref="USearchBox"
      :class="{
        'w-[84%] mr-5 drop-shadow-sm': searchBoxToggle,
        '': !searchBoxToggle,
      }"
      v-model="searchQuery"
      @keyup.enter="searchOnMeilisearchDB(searchQuery)"
      @input="searchOnMeilisearchDB(searchQuery)"
    />
    <NuxtLink to="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor" 
        class="w-6 h-6 inline mb-[0.313rem] scale-90 hover:scale-100 hover:stroke-blue-950"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <div 
      class="relative mx-auto bg-white/90 rounded-md m-1"
      >
        <div class="block transition-opacity duration-300"
          :class="{
          '': searchBoxToggle,
          'h-0 opacity-0 invisible': !searchBoxToggle || searchQuery === '',
        }"
        >
        <ol class="list-none list-outside">
          <NuxtLink v-for="(query, index) in searchResponse" :to="'/' + query.date.substring(0, 10) + '/' + query.name">
            <li>
              <div class="flex flex-row">
                <div class="rounded-md bg-cover bg-bottom bg-gradient-to-br from-sky-500 to-emerald-300 w-12 h-12 m-1"
                :style="{ backgroundImage: 'url(' + query.img + ')' }"
                ></div>
                <div class="flex flex-row w-full">
                  <section class="w-10/12">
                    <h3 class="text-md font-semibold mt-1.5"> {{ query.title }} </h3>
                    <p class="text-xs mt-1 line-clamp-1"> {{ query.description }}</p>
                  </section>
                  <section class="w-2/12 text-xl text-center float-right my-auto">
                    {{ index + 1 }}
                  </section>
                </div>
              </div>
            </li>
          </NuxtLink>
        </ol>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({
      host: 'http://localhost:7700',
      apiKey: 'fT-yMY-izauZATUflpc5gZQQE902ZgyzWyWz5vRW39k'
    })
const index = client.index('blogs');
let queryResponse = ref();
let searchResponse = ref();

export default {
  setup() {
    const searchBoxToggle = ref(false);
    const USearchBox = ref(null);
    const isDocumentHidden = ref(false);
    const searchQuery = ref("");
    let isMounted = false;

    onMounted(() => {
      isMounted = true;
    });

    async function searchOnMeilisearchDB(searchQuery: string) {
      if (searchQuery != '') {
        queryResponse.value = await index.search(searchQuery);
        searchResponse.value = queryResponse.value.hits;
        console.log("look at me dude!", searchResponse);
      }
    }

    const delayFocusToggle = () => {
      setTimeout(() => {
        searchBoxToggle.value = document.hidden;
      }, 200);
    }

    const handleVisChange = () => {
      if (isMounted) {
        isDocumentHidden.value = document.hidden;
        searchBoxToggle.value = isDocumentHidden.value;
        console.log(isDocumentHidden.value);
        console.log(searchQuery);
      }
    };

    onBeforeMount(() => {
      document.addEventListener("visibilitychange", handleVisChange);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("visibilitychange", handleVisChange);
    });

    return {
      searchBoxToggle,
      USearchBox,
      isDocumentHidden,
      handleVisChange,
      searchQuery,
      searchOnMeilisearchDB,
      queryResponse,
      searchResponse,
      delayFocusToggle,
    };
  },
};
</script>

<style></style>
