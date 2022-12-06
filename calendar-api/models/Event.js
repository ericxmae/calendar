const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
	eventName : {
		type : String,
		required : [true, "Name is required."]
	},
	description : {
		type : String,
		required: [true, "Description is required."]
	},
	label: {
		type : String,
		required : [true, "Label is required."]
	},
	eventDate : {
		type : Date,
		default: new Date()
	},
	status : {
		type: String,
		required: [true, "Status is required"]
	}

});

module.exports = mongoose.model("Event", eventSchema)