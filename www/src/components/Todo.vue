<template>
  <div> 
    <div v-for="todo in todos">
      <div@click="getComments(todo._id)" >
     	 Todo: {{todo.name}}
      </div>
      <comment v-if="todo._id === activeId" :todoid="todo._id"></comment>
    </div>
    
  </div>

</template>

<script>
import comment from "./Comment"
export default {
	name: 'todo',
	components:{
		comment
	},
	props: ["listid"],
	data: function () {
	  return {
	  	activeId: ""
	  }
	},
	mounted(){
	  	this.$store.dispatch('getTodos', this.listid)
	},
	methods: {
		getComments(id){
			this.activeId = id;
			this.$store.dispatch('getComments', id)
		}
	},
	computed:{
		todos(){
			//console.log("Todo",this.$store.state.todos[this.listid])
		  return this.$store.state.todos[this.listid]
		}
	}
}
</script> 

<style scoped>

</style>