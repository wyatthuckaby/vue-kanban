<template>
  <div> 
    <div v-for="comment in comments">
      Comment: {{comment.text}}
    </div>
    
  </div>

</template>

<script>

export default {
	name: 'comment',
	props: ["todoid"],
	  data: function () {
	  return {
	  }
	},
	mounted(){
		console.log("Comment thing",this.todoid);
	  	// this.$store.dispatch('getComments', this.todoid);
	},
	methods: {
	},
	computed:{
		comments(){
			// console.log("Comment State", this.$store.state.comments)
		  return this.$store.state.comments[this.todoid._id]
		}
	},
}
</script>

<style scoped>

</style>
