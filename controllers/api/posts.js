
const Post = require('../../models/Post');


// create new post
const create = async (req, res) => {
	try { 
		res.json(await Post.create(req.body)); 
	}
	 
	catch (err) { res.status(400).json(err); }
};

// get all posts
const getAll = async (req, res) => {
	try { 
		const content = await Post.find({});
		res.json(content); 
	} 

	catch (err) { res.status(400).json(err); }
};


module.exports = {create, getAll};
