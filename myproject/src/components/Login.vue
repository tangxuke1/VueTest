<template>
  <div id="div1">
    <div id="div2">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <el-row id="el-row">
      <el-col>
        <el-input id="name" v-model="user" placeholder="请输入用户名"></el-input><br>
      </el-col>
      <el-col>
        <el-input id="password" placeholder="请输入密码" v-model="pass" show-password></el-input>
      </el-col>
    </el-row><br><br><br>
    <el-button type="primary" v-on:click="check">登陆</el-button>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                user: '',
                pass: ''
            }
        },
        methods: {
            check: function () {
                if (this.user != '' && this.pass != '') {
                    this.$router.push({path: '/index'})
                }else{
                    alert("用户名或者密码不能为空!")
                }
            }
        }
    }
</script>

<style scoped>
  #el-row {
    width: 200px;
    height: 35px;
  }
  #div1 {
    margin-top: 200px;
    margin-left: 500px;
  }
  #div2{
    margin-left: 76px;
    padding-bottom: 20px;
  }


</style>
