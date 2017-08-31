<template>
  <div> 
    <div v-for="vandetta in lists" >
      List : {{vandetta.name}}
      <todo :listid="vandetta._id"></todo> 
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

  mounted(){
    //this.$store.dispatch('getBoard',this.$route.params.id)
    this.$store.dispatch('getLists',this.$route.params.id)
  },
  methods: {
  },
  computed:{
    lists(){
      return this.$store.state.lists
    }
  },
}
</script>

<style scoped>

</style>
