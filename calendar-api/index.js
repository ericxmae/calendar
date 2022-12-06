const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.js")
const eventRoutes = require("./routes/event.js")

const app = express();

mongoose.connect("mongodb+srv://admin:admin123@zuitt.w87b5cj.mongodb.net/calendar-api?retryWrites=true&w=majority", {
	useNewUrlParser: true, 
	useUnifiedTopology: true
})

mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas"))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users", userRoutes);
app.use("/events", eventRoutes);


app.listen(process.env.PORT || 3001, () => {
	console.log(`API is now online on port ${process.env.PORT || 3001}`);
})
