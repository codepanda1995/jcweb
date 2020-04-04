<template>
  <div>
      <!-- 组件访问State中数据的一种方式 this.$store.state.count this可以是省略 -->
      <!-- <h3>当前最新的count值为：{{this.$store.state.count}}</h3> -->
      <h3>{{this.$store.getters.showNum}}</h3>
      <button @click="btnAddNum">+1</button>
      <button @click="btnAddNumN">+3</button>
      <button @click="btnAddNumAuto">Auto+1</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        };
    },
    methods:{
        btnAddNum(){
            this.$store.commit("add")
        },
        // 这是触发mutation的第一种方式
        btnAddNumN(){
            // commit的作用就是调用某个mutation函数
            this.$store.commit("addN",3)
        },
        // 异步地让count自增+1
        btnAddNumAuto(){
            // 这里的dispatch函数，专门用来触发action
            this.$store.dispatch("addAsync");
        }
    }
}
</script>

<style lang="less" scoped>

</style>