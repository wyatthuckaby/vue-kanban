<template>
  <div class="my-div">
    <button v-if="!this.clicked" class="btn btn-success" @click="click">Create Board</button>

    <div v-if="this.clicked">
      <h3>Create New Board</h3>
      <form class="my-form">
        <input class="form-control" type="text" placeholder="Title">
        <input class="form-control" type="text" placeholder="Description">
        <button type="submit" class="btn btn-success" @click="click">Create</button>
        <button type="button" class="btn btn-danger" @click="click">Cancel</button>
      </form>
    </div>

    <div v-for="board in boards">
      <router-link :to="'/boards/'+board._id">{{board.name}}</router-link>
      <span @click="removeBoard(board)">x</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'boards',
    data() {
      return {
        clicked: false
      }
    },
    mounted() {
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      }
    },
    methods: {

      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      }
    }
  }

</script>

<style>
  .my-form {
    padding: 50px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px lightgray;
    margin-bottom: 50px;
    margin-top: 35;
  }

  .my-form input {
    margin-bottom: 25px;
  }
</style>