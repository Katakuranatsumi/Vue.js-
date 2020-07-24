<template>
  <div id="app">
    <h1 class="greeting">メッセージ: {{ msg }}</h1>  
  </div>
</template>

<script>
export default {
  data () {
    return { msg: 'こんにちは！' }  
  }
}
</script>

<style>
.greeting { color: #42b983; }
</style>
