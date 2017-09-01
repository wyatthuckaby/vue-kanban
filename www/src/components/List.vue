<template>
  <div class="row">
    <div class="col-xs-3 list-outer" v-for="vandetta in lists">
      <div class="my-list">
        <h4>{{vandetta.name}}</h4>
        <todo :listid="vandetta._id"></todo>
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
      }
    },

    mounted() {
      //this.$store.dispatch('getBoard',this.$route.params.id)
      this.$store.dispatch('getLists', this.$route.params.id)
    },
    methods: {
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
</style>