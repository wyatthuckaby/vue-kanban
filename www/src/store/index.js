import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'

let api = axios.create({
  baseURL: 'http://localhost:4050/api/',
  timeout: 7000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:4050/',
  timeout: 7000,
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
    user: {},
    loggedIn: {}
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
    setComments(state, data) {
      // state.comments[data.todoId] = data.data
      vue.set(state.comments, data.todoId, data);
    },
    setLoggedIn(state, data) {
      console.log(data)
      state.loggedIn = data;
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts

    getBoards({
      commit,
      dispatch
    }) {
      api('boards/user/boards')
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
      // api('boardlists/' + id)
      api(`boards/${id}/lists`)
        .then(res => {
          console.log(res.data.data)
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
      // api('listtodos/' + id)
      api(`/lists/${id}/todos`)
        .then(res => {
          console.log("store list todos", res);
          res.data.listId = id
          commit('setTodos', res.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    createTodo({
      commit,
      dispatch
    }, todo) {
      api.post('todos/', todo)
        .then((res) => {
          console.log("create todo:", res)
          dispatch('getTodos')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    getComments({
      commit,
      dispatch
    }, id) {
      api(`/todos/${id}/comments`)
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


    createList({
      commit,
      dispatch
    }, list) {
      api.post('lists/', list)
        .then((res) => {
          console.log("createlist:", res)
          dispatch('getLists', res.data.data.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    removeList({
      commit,
      dispatch
    }, list){

      api.delete(`/lists/${list._id}`)
      .then((res) => {
        dispach('getLists', list.boardId)
      })
      .catch((err) => {
        commit('handleError', err);
      })
    },



    removeTodo({
      commit,
      dispatch
    }, todo){
      api.delete(`/todos/${todo._id}`)
      .then((res) => {
        dispach('getTodos', todo.listId)
      })
      .catch((err) => {
        commit('handleError', err);
      })
    },


    removeBoard({
      commit,
      dispatch
    }, board) {
      api.delete(`boards/${board._id}`)
        .then(res => {
          this.getBoards()
        })
        .catch(err => {
          commit('handleError', err)
        })
    },


    login({
      commit,
      dispatch
    }, user) {
      auth.post('/login', user)
        .then((res) => {
          commit("setLoggedIn", res.data.data);
          console.log(res)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },



    register({
      commit,
      dispach
    }, user) {
      auth.post('/register', user)
        .then((res) => {
          if (res.data.message == "Successfully created user account") {
            commit("setLoggedIn", res.data.data);
          }
        })
        .catch(err => {
          commit('handleError', err)
        })
    },

    logout({
      commit,
      dispatch
    }) {
      auth.delete('/logout')
        .then((res) => {
          commit("setLoggedIn", {})
        })
    },
    authenticate({ commit, dispach }, user) {
      auth.get('/authenticate').then((res) => {
        if (res.data.error) {
          commit("setLoggedIn", {});
        } else commit("setLoggedIn", res.data.data)
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