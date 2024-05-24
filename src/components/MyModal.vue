<script setup>
import { useModalStore } from '../stores/modal'
import { useRestartStore } from '../stores/restart'

const modal = useModalStore()
const restart = useRestartStore()
</script>

<template>
  <Teleport to="body">
    <div v-if="modal.getState() === true" class="modal">
      <p>축하합니다.</p>
      <button @click="[modal.showChange(), restart.restartChange()]">Restart</button>
    </div>
  </Teleport>
</template>

<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 5%;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  font-size: xxx-large;
  font-weight: 900;
  color: black;
}
.button {
  width: 10;
}
</style>
