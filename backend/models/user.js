const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1"); 
// Refer to https://www.npmjs.com/package/uuidv1 and https://www.npmjs.com/package/uuid

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			maxlength: 32,
			trim: true,
			required: true,
		},
		lastname: {
			type: String,
			maxlength: 32,
			trim: true,
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			required: true,
		},
		userinfo: {
			type: String,
			trim: true,
		},
		//Stored Encrypted Password
		encry_password: {
			type: String,
			required: true,
		},
		//Salt value used for encryting the Plain Password entered by the user
		salt: String,
		//Role is to differentiate b/w admin(1) and normal user(0)
		role: {
			type: Number,
			default: 0,
		},
		purchases: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

//Plain Password to encrypassword provided by the user using virtual fields
//refer to https://mongoosejs.com/docs/tutorials/virtuals.html for understanding virtuals
userSchema
	.virtual("password")
	.set(function (password) {
		this._password = password; // _password indicates a private variable hence more secure (optional)
		this.salt = uuidv1(); //populate salt
		this.encry_password = this.securePassword(password);
	})
	.get(function () {
		return this._password;
	});

userSchema.methods = {
	//Authentication Method for checking the password entered by the user is correct
	authenticate: function (plainpassword) {
		return this.securePassword(plainpassword) === this.encry_password;
	},

	//Encrypting the Plain Password provided by the user
	//Refer to https://nodejs.org/api/crypto.html for documentation
	securePassword: function (plainpassword) {
		if (!plainpassword) return "";
		try {
			return crypto
				.createHmac("sha256", this.salt)
				.update(plainpassword)
				.digest("hex");
		} catch (err) {
			return "";
		}
	},
};

module.exports = mongoose.model("User", userSchema);
