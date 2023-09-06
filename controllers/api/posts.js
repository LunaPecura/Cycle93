
const Post = require('../../models/Post');


// create new post
const create = async (req, res) => {
	try { 
		res.json(await Post.create(req.body)); 
	} catch (err) { res.status(400).json(err); }
}

// get all posts
const getAll = async (req, res) => {
	try { 
		res.json(await Post.find({}).sort({_id:-1})); 
	} catch (err) { res.status(400).json(err); }
}

// edit post
const edit = async (req, res) => {
	try { 
		console.log("inside edit")
		res.json(await Post.replaceOne({_id: req.params.id.substr(1)}, req.body)); 
	} catch (err) { res.status(400).json(err); }
}

// delete post
const remove = async (req, res) => {
	try { 
		res.json(await Post.deleteOne({_id: req.params.id.substr(1)})); 
	} catch (err) { res.status(400).json(err); }
}


module.exports = {create, getAll, remove, edit};
