<template>
  <div>
      <!-- <h3>当期最新的count值为：{{count}}</h3> -->
      <h3>当前的值Wie{{showNum}}</h3>
      <button @click="btnSubNum">-1</button>
      <button @click="btnSubNumN">-3</button>
      <button @click="subAsync">Auto-1</button>
  </div>
</template>

<script>
// 组件访问State中数据的第二种方式

// 1.从vuex中按需导入mapState函数
import {mapState} from "vuex"
// 从Vuex中按需导入mapMutations函数
import {mapMutations} from "vuex"
// 从vuex中按需导入mapActions函数
import {mapActions} from "vuex"
// 第二种方式获取getters
import {mapGetters} from "vuex"

export default {
    data(){
      return{

      }
    },
    computed:{
      // 将全局数据，映射为当前组件的计算属性
      ...mapState(["count"]),
      // 
      ...mapGetters(["showNum"])
    },
    methods:{
      // 将指定的mutation函数，映射到当前组件的Methods函数
      ...mapMutations(["sub","subN"]),
      // 
      ...mapActions(["subAsync"]),
      btnSubNum(){
        this.sub()
      },
      btnSubNumN(){
        this.subN(3)
      }
      
    }
}
</script>

<style>

</style>