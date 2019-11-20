<template>
  <div id="div1">
    <div id="div2">
      <p>用户</p>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div id="div3">
      <div id="page"><router-link to="page">首页</router-link></div>
      <div id="todo"><router-link to="todo">TodoList</router-link></div>
      <div id="card"><router-link to="element">Element-ui</router-link></div>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
  #div1 {
    margin-top: 2%;
  }

  #div2 {
    float: right;
    padding-right: 30px;

  }

  #div3 {
    float: left;
    width: 80%;
    padding-left: 35%;
  }

  #page {
    width: 15%;
    float: left;
  }

  #todo {
    width: 15%;
    float: left;
  }

  #card {
    width: 25%;
    float: left;
  }

</style>
