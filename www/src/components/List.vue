<template>
  <div class="row">
    <div class="col-xs-3 list-outer" v-for="list in lists">
      <div class="my-list">
        <div class="row">
          <div class="col-xs-10">
            <h4>{{list.name}}</h4>
            <h5>{{list.description}}</h5>
          </div>
          <div class="col-xs-2">
            <span @click="deleteList({_id: list._id, boardId: list.boardId})" class="glyphicon glyphicon-remove-sign"></span>
          </div>
        </div>
        <form @sumbit.prevent="createTodo">
          <div class="align-things">
            <input v-model="todoInfo.name" class="form-control" placeholder="New Task" type="text">
            <input v-model="todoInfo.description" class="form-control" placeholder="Description" type="text">
            <button type="submit" class="glyphicon glyphicon-plus-sign"></button>
          </div>
        </form>
        <todo :listid="list._id"></todo>
      </div>
    </div>
  </div>
</template>

<script>
  import todo from './Todo'
  export default {
    name: 'list',
    components: {
      todo
    },
    data: function () {
      return {
        todoInfo: {
          name: "",
          description: ""
        }
      }
    },

    mounted() {
      //this.$store.dispatch('getBoard',this.$route.params.id)
      this.$store.dispatch('getTodos', this.$route.params.id)
    },
    methods: {
      createTodo(){
        this.$store.dispatch('createTodo', this.todoInfo)
      },
      deleteList(list){
        this.$store.dispatch('removeList', list)
      }
    },
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
  }

</script>

<style scoped>
  .my-list {
    padding: 25px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px lightgray;
    margin-bottom: 50px;
    margin-top: 35;
  }
  .list-outer {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .glyphicon-plus-sign {
    color: #5cb85c;
  }
  .glyphicon-remove-sign {
    color: red;
  }
</style>