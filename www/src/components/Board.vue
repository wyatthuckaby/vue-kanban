<template>
  <div class="row"> 
    Active Board: {{board.name}}

      <list></list>
    </div>
  </div>
</template>

<script>
import list from "./List"
export default {
  name: 'board',
  components: {
    list
  },
  mounted(){
    this.$store.dispatch('getBoard',this.$route.params.id)
    //this.$store.dispatch('getLists',this.$route.params.id)
  },
  methods: {
  },
  computed:{
    board(){
      return this.$store.state.activeBoard
    }

  },
}
</script>

<style scoped>

</style>
