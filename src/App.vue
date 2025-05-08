<script setup>
import { ref } from 'vue'

import { renderMarkdown } from './assets/js/renderMarkdown'

import { RouterLink, RouterView } from 'vue-router'
import markdownContent from '@/assets/pages/teste.md?raw'
import SideBar from './components/SideBar.vue'

const result = ref(renderMarkdown(markdownContent))
const text = ref(result)
</script>

<template>
  <main>
    <div class="d-flex">
      <SideBar></SideBar>
      <RouterView />
    </div>
  </main>
</template>
