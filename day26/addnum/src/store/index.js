import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    //点击按钮进行+1操作
    addNumFun(state){
      state.count++
    },
    subNumFun(state) {
      state.count--
    }
  },
  // 可以用来存储异步函数
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过 context.commit()进行触发某个mumation才行
        context.commit('addNumFun')
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        // 在actions中，不能直接修改state中的数据
        // 必须通过 context.commit()进行触发某个mumation才行
        context.commit('subNumFun')
      }, 1000)
    }
  },
  modules: {
  },
  getters:{
    showNum(state) {
      return '当前最新的数量是:[' + state.count + ']'
    }
  }
})
