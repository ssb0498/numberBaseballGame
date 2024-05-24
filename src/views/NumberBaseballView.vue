<script setup>
import NumberBaseball from '@/components/NumberBaseball.vue'
import MyModal from '@/components/MyModal.vue'
</script>

<template>
  <NumberBaseball />
  <MyModal />
</template>

<style>
@media (min-width: 1024px) {
  .NumberBaseball {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
