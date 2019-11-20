<template>
  <div id="tododiv">
    <el-card class="box-card">
      <div class="text item">
        <ul v-for="list in lists" @click="back(list)">
          <li v-if="list.flag">
            <del>{{list.item}}</del>
          </li>
          <li v-else><span>{{list.item}}</span></li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "TodoList",
        data() {
            return {
                lists: [{
                    item: 'SpringBoot',
                    flag: false
                }, {
                        item: 'SpringCloud',
                        flag: false
                    }, {
                    item: 'Vue',
                    flag: false
                }, {
                    item: 'Nodejs',
                    flag: false
                }, {
                    item: '大数据',
                    flag: false
                }]
            }
        },
        methods: {
            back: function (list) {
                list.flag = !list.flag
            }
        }
    }
</script>


<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }

  #tododiv {
    width: 480px;
    margin-left: 30%;
    margin-top: 2%;
  }
</style>

