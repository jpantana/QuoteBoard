import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data() {
    return {
      progress: 0
    }
  },
  methods: {
    changeProgress(x) {
      this.progress = x;
    }
  }
});

const vm = new Vue({
  render: h => h(App)
})

vm.$mount("#app");