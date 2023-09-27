const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export default {
async asyncData() {
const { $content } = require('@nuxt/content');
const document = await $content('path/to/md/document').fetch();

return {
title: document.title,
description: document.description
};
}
};
