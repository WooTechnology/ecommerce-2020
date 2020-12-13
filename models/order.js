const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
	product: {
		type: ObjectId,
		ref: "Product",
	},
	name: String,
	description: String,
	category: {
		type: ObjectId,
		ref: "Product",
	},
	quantity: Number,
	price: Number,
});

module.exports =mongoose.model("ProductCart", ProductCartSchema);
