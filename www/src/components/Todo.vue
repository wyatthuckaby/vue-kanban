<template>
	<div>
		<div class="row" v-for="todo in todos">
			<div class="col-xs-10" @click="getComments(todo._id)">
				Todo: {{todo.name}}
			</div>
			<div class="col-xs-2">
				<span @click="deleteTodo({_id: todo._id, ListId: todo.todoId})" class="glyphicon glyphicon-remove-sign"></span>
			</div>
			<comment v-if="todo._id === activeId" :todoid="todo._id"></comment>
		</div>

	</div>

</template>

<script>
	import comment from "./Comment"
	export default {
		name: 'todo',
		components: {
			comment
		},
		props: ["listid"],
		data: function () {
			return {
				activeId: ""
			}
		},
		mounted() {
			this.$store.dispatch('getTodos', this.listid)
		},
		methods: {
			getComments(id) {
				this.activeId = id;
				this.$store.dispatch('getComments', id)
			},
		deleteTodo(todo) {
				this.$store.dispatch('removeTodo', todo)
			}
		},
		computed: {
			todos() {
				//console.log("Todo",this.$store.state.todos[this.listid])
				return this.$store.state.todos[this.listid]
			}
		}
	}

</script>

<style scoped>

</style>