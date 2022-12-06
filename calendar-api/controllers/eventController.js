const Event = require("../models/Event.js");

module.exports.getAllEvents = () => {
	return Event.find({}).then(result => {
		return result;
	})
}

module.exports.createEvent = (data) => {
		let newEvent = new Event({
		eventName : data.event.eventName,
		description : data.event.description,
		label : data.event.label,
		status : data.event.status
	});

	return newEvent.save().then((newEvent, error) => {
		if (error){
			return false;
		}

			return true;
	})

module.exports.getPending = () => {
	return Event.find({status : "Pending"}).then(result => {
		return result;
	})
}

module.exports.getDone = () => {
	return Event.find({status : "Done"}).then(result => {
		return result;
	})
}

module.exports.getOnGoing = () => {
	return Event.find({status : "OnGoing"}).then(result => {
		return result;
	})
}

module.exports.getEvent = (eventId) => {
	return Event.findById(eventId).then(result => {
		return result;
	})
}

module.exports.updateEvent = (EventId, data) => {

	return Event.findByIdAndUpdate(EventId, {
		eventName : data.event.eventName,
		description : data.event.description,
		label : data.event.label,
		status: data.event.status
	}).then((updatedEvent, error) => {
		if(error){
			return false;
		} else {
			return true;
		}

	
	})

}


}
