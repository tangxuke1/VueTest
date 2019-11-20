<template>
  <div>
    <h1>{{message}}</h1>
    <input type="text" v-model="message">
  </div>
</template>

<script>
  export default {
    name: "Test",
    data() {
      return {
        message: 'Enter'
      }
    }
  }
</script>

<style scoped>

  h1{
    color:red;
  }
</style>
