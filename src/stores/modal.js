import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return { show: false }
  },
  actions: {
    showChange() {
      this.show = !this.show
    },
    getState() {
      return this.show
    },
    printState() {
      console.log(this.show)
    }
  }
})
