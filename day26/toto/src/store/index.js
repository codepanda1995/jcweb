import Vue from 'vue'
import Vuex from 'vuex'
// 导入异步处理
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 将数据从App.vue中进行剥离
    list: [], //这是所有任务列表数据
    // 输入框的值
    inputValue: "super",
    // 下一个item的id
    nextId: 5,
    // 默认列表数据
    viewKey:"all"
  },
  mutations: {
    // 初始化列表数据
    initList(state, list) {
      state.list = list;
    },
    // 设置输入框的值
    setInputValue(state, val) {
      console.log(val);

      state.inputValue = val;
    },
    // 添加项目
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      };
      // 将数据项添加到列表中
      state.list.push(obj);
      // 同时对NextID进行+1操作,让其处于未被占用状态
      state.nextId++;
      // 同时将输入框数据清空
      state.inputValue = "";
    },
    // 删除项目
    deleteItem(state, id) {
      console.log(id);

      // 先要判断要删除的id是否存在
      const index = state.list.findIndex(x => x.id == id);
      console.log(index);
      // 根据索引删除对应的元素
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },
    // 进行复选框状态更改
    changeCheckBox(state, params) {
      // 先判断要更改的项目id是否存在
      const index = state.list.findIndex(x => x.id === params.id);
      // 根据返回的index值进行更改项目的状态
      if (index !== -1) {
        state.list[index].done = params.status;
      }
    },
    // 清除已完成的事项
    clearAllItem(state){
      // 使用过滤器进行数据筛选
      state.list = state.list.filter(x=>x.done === false)
    },
    // 切换页面获取数据
    changeList(state,key){
      // 切换面板，切换key值
      console.log(key)
      state.viewKey = key 
    }
  },
  actions: {
    // 异步处理，获取列表数据
    getList(context) {
      //异步获取数据
      axios.get("/list.json").then(
        // 对数据进行解构
        ({ data }) => {
          console.log(data);
          // 操作mutdation函数
          context.commit("initList", data);
        }
      );
    }
  },
  modules: {},
  //Getter用于对Store中的数据进行加工处理后形成新的数据
  getters:{
    // 统计未完成的事项数目
    unDoneNum(state){
      // 使用过滤器进行筛选出未完成的事项,过滤器返回的是一个数组
      return state.list.filter(x=>x.done === false).length
    },
    // 根据面板状态更新数据
    infoList(state){
      // 根据状态判断获取数据
      if(state.viewKey == "undone"){
        return  state.list.filter(x=>x.done === false)
      }else if(state.viewKey == "done"){
        return  state.list.filter(x=>x.done === true)
      }else{
        return  state.list
      }
    }

  }
});
