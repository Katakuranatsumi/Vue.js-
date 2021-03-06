import App from './App.vue'
import Vue from 'vue'
import store from '../store/task_store'

new Vue({
  el: '#app',

  // コンポーネントからストアを利用できるようにする
  store,

  render: h => h(App),
})
