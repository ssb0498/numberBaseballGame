import { defineStore } from 'pinia'

export const useRestartStore = defineStore('restart', {
  state: () => {
    return { restart: false }
  },
  actions: {
    restartChange() {
      this.restart = !this.restart
    },
    getState() {
      return this.restart
    },
    printState() {
      console.log(this.restart)
    }
  }
})
