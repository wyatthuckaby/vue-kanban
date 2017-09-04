<template>
	<div>
		<div class="row" v-for="todo in todos">
			<div class="col-xs-10" @click="getComments(todo._id)">
				Todo: {{todo.name}}
			</div>
			<div class="col-xs-2">
				<span @click="deleteTodo({_id: todo._id, ListId: todo.listId})" class="glyphicon glyphicon-remove-sign"></span>
			</div>
			<br>
	        <form @submit.prevent="submitComment(todo._id)">
	          <div class="align-things">
	            <input v-model="comment.text" class="form-control" placeholder="Comment" type="text">
	            <button type="submit" class="glyphicon glyphicon-plus-sign"></button>
	          </div>
	        </form>
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
				activeId: "",
				comment: {
					text: ""
				}
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
			},
			submitComment(id){
				var commentObj = {
					todoId: id,
					text: this.comment.text
				}
				this.$store.dispatch('createComment', commentObj);
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