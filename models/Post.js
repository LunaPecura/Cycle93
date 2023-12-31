const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema(
	{
		subject: { type: String, required: true },
		body: { type: String, required: true },
		author: { type: String, required: true },
		authorID: { type: String, required: true },
		tags: { type: Array /* required: true */ }
	}, 
	{
		timestamps: true
	}
);



module.exports = mongoose.model('Post', postSchema);
