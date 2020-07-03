<template>
  <div id="app">
    <a-input placeholder="请输入任务" :value="inputValue" @change="changeInputValue" class="my_ipt" />
    <a-button type="primary" @click="addItem">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="e=>{changeCheckBox(e,item.id)}">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="deleteItemById(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneNum}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group >
          <a-button :type="viewKey === 'all' ? 'primary':''" @click="changeTabs('all')">全部</a-button>
          <a-button :type="viewKey === 'undone' ? 'primary':''" @click="changeTabs('undone')">未完成</a-button>
          <a-button :type="viewKey === 'done' ? 'primary':''" @click="changeTabs('done')">已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="clearAll">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
// 从vuex中按需导入mapState函数
import {mapState,mapGetters} from "vuex"

export default {
  name: 'app',
  data() {
    return {
      // list:[],
      // inputValue:""
    }
  },
  created(){
    // 触发actions事件
    this.$store.dispatch("getList")
  },
  methods:{
    //监听输入框的改变事件
    changeInputValue(e){
      // console.log(e.target.value);
      this.$store.commit("setInputValue",e.target.value)
    },
    // 点击按钮，添加项目
    addItem(){
      // 判断输入框中是否有数据
      if(this.inputValue.trim() <= 0){
        return this.$message.warning("输入框数据不可为空")
      }
      this.$store.commit("addItem")
    },
    // 点击删除按钮，移除数据项
    deleteItemById(id){
      console.log(id);
      // 对数据项进行删除
      this.$store.commit("deleteItem",id)
     
      
    },
    // 当点击复选框时，进行状态更改
    changeCheckBox(e,id){
      console.log(e.target.checked);
      console.log(id);
      // 
      this.$store.commit("changeCheckBox",{
        id:id,
        status:e.target.checked
      })
      
    },
    // 点击清除按钮，清除已经完成的选项
    clearAll(){
      // 
      this.$store.commit("clearAllItem")
    },
    // 点击菜单切换面板数据
    changeTabs(key){
      console.log(key);
      // 
      this.$store.commit("changeList",key)
    }


    
  },
  // 计算属性
  computed:{
    ...mapState(["inputValue","viewKey"]),
    ...mapGetters(["unDoneNum","infoList"])
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>