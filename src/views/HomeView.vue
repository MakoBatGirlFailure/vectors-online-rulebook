<script setup>

import { ref } from 'vue'

import { renderMarkdown } from '../assets/js/renderMarkdown'
import markdownContent from '../assets/pages/index.md?raw'


const result = ref(renderMarkdown(markdownContent))
const text = ref(result)
</script>

<template>
  <div>
    <div class="article" v-html="text"></div>
  </div>
</template>
