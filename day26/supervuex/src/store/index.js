
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 创建store数据源，提供唯一公共数据
  state: {
    count: 0,
  },
  //
  mutations: {
    add(state) {
      state.count++
    },
    addN(state,step){
      state.count += step
    },
    sub(state){
      state.count--
    },
    subN(state,step){
      state.count -= step
    }
  },
  // 可以用来存储异步函数
  actions: {
    addAsync(context){
      setTimeout(()=>{
        // 在actions中，不能直接修改state中的数据
        // 必须通过 context.commit()进行触发某个mumation才行
        context.commit('add')
      },1000)
    },
    subAsync(context){
      setTimeout(()=>{
        context.commit("sub")
      },1000)
    }
  },
  modules: {},
  getters:{
    showNum(state){
      return '当前最新的数量是:[' + state.count + ']'
    }
  }
})
