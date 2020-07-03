<template>
  <div>
    <p>------------count-------------</p>
    <h1>{{this.$store.state.count}}</h1>
    <button @click="addNum">+1</button>
    <h1>{{showNum}}</h1>
    <button @click="btnAddNumAuto">异步</button>
    <button @click="subAsync">异步-1</button>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
import { mapGetters } from "vuex"
import { mapActions } from "vuex";
export default {
  data(){
    return{

    }
  },
  methods:{
    // 点击按钮进行+1操作
    // addNum(){
    //   this.$store.commit("addNumFun")
    // }
    
    // 将指定的mutation函数，映射到当前组件的Methods函数
    ...mapMutations(["addNumFun"]),
    ...mapActions(["subAsync"]),
    addNum(){
      this.addNumFun()
    },
     // 异步地让count自增+1
    btnAddNumAuto(){
        // 这里的dispatch函数，专门用来触发action
        this.$store.dispatch("addAsync");
    }
  },
  computed:{
    // 将全局数据映射为当前组件的计算属性
    ...mapGetters(["showNum"]),
    
    
  }
}
</script>

<style>

</style>
