<script setup lang="ts">
import { ref } from 'vue'
import { Vue3TailwindModal } from 'vue3-tailwind-modal'

const showModal = ref(false)
</script>

<template>
  <div class="w-screen grid place-items-center justify-center min-h-screen bg-slate-700">
    <button
      @click="showModal = true"
      class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
    >
      Show Modal A
    </button>
    <Vue3TailwindModal :showModal="showModal" @close="showModal = false">
      <template #header><h2 class="text-lg">Example 1</h2></template>
      The default slot is the body, so we don't need to wrap this inside template tags.
    </Vue3TailwindModal>
  </div>
</template>
