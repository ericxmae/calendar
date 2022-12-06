const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const auth = require("../auth.js");


module.exports.checkEmailExists = (reqBody) => {
	return User.find({email : reqBody.email}).then(result => {
		if(result.length > 0){
			return true;
		} else{
			return false;
		}
	})
}

module.exports.registerUser = (reqBody) => {

			let newUser = new User({
				username : reqBody.username,
				email : reqBody.email,
				password : bcrypt.hashSync(reqBody.password, 10)
			})

			return newUser.save().then((user, error) => {
				if(error){
					return false;
				}else {
					return true;
				}
			})
		}


module.exports.loginUser = (reqBody) => {
	return User.findOne({email : reqBody.email}).then(result => {
		if(result == null){
			return `Login failed. Try again.`; 
		}else {
			// compareSync returns a boolean type
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

			if(isPasswordCorrect){
				return {access : auth.createAccessToken(result)}
			}
		}
	})
}