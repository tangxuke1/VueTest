<template>
  <div id="pagediv">
    <h1>{{msg}}</h1>
    <button v-on:click="fun1('v-on')">v-on</button>
    <div v-text="msg2"></div>
    <div v-html="msg2"></div>
    <font v-bind:color="ys">v-bind</font><br>
    <input v-model="username"><br>
    <input v-model="password">
    <ul>
      <li v-for="(item) in list">{{item}}</li>
    </ul>
    <span v-if="flag">para</span>
    <span v-show="flag">我出来了</span>
    <button @click="toggle">切换</button>
  </div>
</template>

<script>
    export default {
        name: "Page",
        data(){
            return {
                msg: 'hello Vue',
                msg2: "<h2>v-html和v-text</h2>",
                ys: 'red',
                username: 'v-model',
                password: 'password',
                list: ['v-for',2,3],
                flag: false
            }
        },
        methods: {
            fun1: function (msg) {
                this.msg = msg
            },
            toggle: function () {
                this.flag = !this.flag
            }
        }
    }
</script>

<style scoped>
  #pagediv {
    margin-top: 200px;
    margin-left: 500px;
  }
</style>
