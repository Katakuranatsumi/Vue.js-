import App from './TaskApp.vue'
import Vue from 'vue'
import store from './task_store'

new Vue({
  el: '#app',

  // コンポーネントからストアを利用できるようにする
  store,

  render: h => h(App)
})
