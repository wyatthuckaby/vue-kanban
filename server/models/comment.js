var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	text: {
		type: String
	},
	created: {
		type: String,
		default: new Date()
	},
	// Relations
	creatorId: {
		type: ObjectId,
		ref: models.user.name,
		required: true
	},
	todoId: {
		type: ObjectId,
		ref: models.todo,
		required: true
	}
});



module.exports = mongoose.model(models.comment.name, schema);