var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

/**
 * List Schema
 * @type {mongoose}
 */
var schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
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
	boardId: {
		type: ObjectId,
		ref: models.board._id,
		required: true
	}
});

//59a5c26bf9a24f6fb38d0827

module.exports = mongoose.model(models.list.name, schema);