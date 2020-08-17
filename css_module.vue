<template>
  <p :class="$style.message">こんにちは！</p>
</template>

<script>
export default {
  created () {
    // es-lint-disable-line no-console
    console.log('css modules: $style', this.$style)  
  }
}
</script>
<style module>
.message { color: #42b983; }
</style>
