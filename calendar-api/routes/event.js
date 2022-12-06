const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController.js");
const auth = require("../auth.js");


router.get("/all", (req, res) => {
	eventController.getAllEvents().then(resultFromController => {
		res.send(resultFromController)
	})
})

router.post("/create", (req, res) => {
	const data = {
		event: req.body
	}

	eventController.createEvent(data).then(resultFromController => { res.send(resultFromController)});
})

// retrieve all active events
router.get("/pending", (req, res) => {
	eventController.getPendingEvents().then(resultFromController => res.send(resultFromController))
})

router.get("/done", (req, res) => {
	eventController.getDone().then(resultFromController => res.send(resultFromController))
})

router.get("/ongoing", (req, res) => {
	eventController.getOnGoing().then(resultFromController => res.send(resultFromController))
})


// retrieve single event
router.get("/:eventId", (req, res) => {
	eventController.getEvent(req.params.eventId).then(resultFromController => {
		res.send(resultFromController)
	})
})

router.put("/:eventId/update", (req, res) => {
	const data = {
		event : req.body,
	}
	eventController.updateEvent(req.params.eventId, data).then(resultFromController => {
		res.send(resultFromController)
	})
})

module.exports = router;