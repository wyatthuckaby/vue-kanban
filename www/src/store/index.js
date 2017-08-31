import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'

let api = axios.create({
  baseURL: 'http://localhost:4050/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:4050/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    activeBoard: {},
    error: {},
    lists: [],
    todos: {},
    comments: {},
  },
  mutations: {
    setBoards(state, data) {
      state.boards = data
    },
    handleError(state, err) {
      state.error = err
    },
    setActiveBoard(state, data) {
      state.activeBoard = data
    },
    setLists(state, data) {
      state.lists = data
    },
    setTodos(state, data) {
      //state.todos[data.listId] = data.data
      vue.set(state.todos, data.listId, data.data);
    },
    setComments(state, data){
      // state.comments[data.todoId] = data.data
      vue.set(state.comments, data.todoId, data);
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts

    getBoards({
      commit,
      dispatch
    }) {
      api('boards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getLists({
      commit,
      dispatch
    }, id) {
      api('boardlists/' + id)
        .then(res => {

          commit('setLists', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getTodos({
      commit,
      dispatch
    }, id) {
      api('listtodos/' + id)
        .then(res => {
          console.log("store list todos", res);
          res.data.listId = id
          commit('setTodos', res.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getComments({
      commit,
      dispatch
    }, id) {
      api('todocomments/' + id)
        .then(res => {
          res.data.todoId = id;
          commit('setComments', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({
      commit,
      dispatch
    }, id) {
      api('boards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
          
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createBoard({
      commit,
      dispatch
    }, board) {
      api.post('boards/', board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({
      commit,
      dispatch
    }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    handleError({
      commit,
      dispatch
    }, err) {
      commit('handleError', err)
    }
  }

})


export default store