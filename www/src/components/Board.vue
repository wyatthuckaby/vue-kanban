<template>
  <div>
    <h1>{{board.name}}</h1>

    <button v-if="!this.clicked" class="btn btn-success" @click="click">Create List</button>

    <div v-if="this.clicked">
      <h3>Create New List</h3>
      <form @submit.prevent="createBoard" class="my-form">
        <input class="form-control" type="text" placeholder="Title">
        <input class="form-control" type="text" placeholder="Description">
        <button type="submit" class="btn btn-success" @click="click">Create</button>
        <button type="button" class="btn btn-danger" @click="click">Cancel</button>
      </form>
    </div>

    <list></list>
  </div>
</template>

<script>
  import list from "./List"
  export default {
    name: 'board',
    components: {
      list
    },
    data() {
      return {
        clicked: false,
        
      }
    },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
      //this.$store.dispatch('getLists',this.$route.params.id)
    },
    methods: {      
      click() {
        this.clicked = !this.clicked;
      }
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      }

    },
  }

</script>

<style scoped>

</style>