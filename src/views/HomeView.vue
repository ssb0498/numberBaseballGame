<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const routeChange = (path) => {
  router.push(path)
}
</script>

<template>
  <button @click="routeChange('/game')">Get Start!</button>
</template>

<style>
button {
  background-color: green;
  color: black;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px white;
  cursor: pointer;
  width: 200px;
  height: 100px;
}
</style>
